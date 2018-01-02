"\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";function str2ab(str){var buf= new ArrayBuffer(str.length);var bufView= new Uint8Array(buf);for(var i=0;i<str.length;i++){bufView[i]=str.charCodeAt(i)};return buf}function a2s(buf){var view= new Uint8Array(buf),str="";for(var i=0,j=view.length;i<j;i++){str+=String.fromCharCode(view[i])};return str}function SocketStream(socketId){this.socketId=socketId;this.index=0;this.buffer=null;this.rawBuffer=null;this.finished=false;this.ssl=null;this.started=false;this.bufferArray= new Array();this.readCallback=null}SocketStream.prototype={load:function(){var that=this;try{chrome.socket.read(this.socketId,8192,function(dataRead){if(chrome.runtime.lastError){return};if(dataRead.resultCode<=0){that.finished=true;that.onFinished()}else {if(that.ssl){that.ssl.readCallback=function(data){that.onLoaded(data)};that.ssl.readError=function(){that.finished=true;that.onFinished()};var pState=that.ssl.process(a2s(dataRead.data))}else {that.onLoaded(dataRead.data)};try{that.load()}catch(error){}}})}catch(ex){}},consume:function(){this.buffer=null;this.bufferArray=null;this.index=0;this.bufferArray= new Array()},onLoaded:function(data){this.bufferArray.push(data);this.runReadCallback()},onFinished:function(){this.runReadCallback()},runReadCallback:function(){if(this.readCallback){var callback=this.readCallback;this.readCallback=null;callback()}},read:function(size){if(!this.hasAvailableData()){return null};if(size>this.buffer.length-this.index){size=this.buffer.length-this.index};var result=this.buffer.subarray(this.index,this.index+size);this.index+=size;return result},readRaw:function(size){if(!this.hasAvailableData()){return null};if(size>this.buffer.length-this.index){size=this.buffer.length-this.index};var result=this.rawBuffer.slice(this.index,this.index+size);this.index+=Number(size);return result},readChar:function(){if(!this.hasAvailableData()){return null};return String.fromCharCode(this.buffer[this.index++])},fill:function(callback){if(!this.started){this.started=true;this.load()};if(this.buffer==null||this.index>=this.buffer.length){if(this.bufferArray.length>0){this.index=0;this.rawBuffer=this.bufferArray.shift();this.buffer= new Uint8Array(this.rawBuffer);callback()}else {if(this.readCallback!=null){};this.readCallback=callback}}else {throw "\x46\x69\x6C\x6C\x20\x69\x6E\x76\x6F\x6B\x65\x64\x20\x77\x68\x65\x6E\x20\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x64\x61\x74\x61\x20\x61\x76\x61\x69\x6C\x61\x62\x6C\x65"}},hasAvailableData:function(){return this.buffer!=null&&this.index<this.buffer.length},isFinished:function(){return this.finished&&this.bufferArray.length==0},readln:function(callback,error){var reader= new LineReader(this);reader.readLine(callback,error)},writeln:function(strLine,callback,error){strLine+="\x0D\x0A";this.write(str2ab(strLine),callback,error)},write:function(bytes,callback,error){if(this.ssl){this.ssl.writeCallback=callback;this.ssl.writeError=error;this.ssl.prepare(bytes)}else {this.writeImpl(bytes,callback,error)}},writeImpl:function(bytes,callback,error){var that=this;try{chrome.socket.write(that.socketId,bytes,function(writeInfo){if(chrome.runtime.lastError){error();return};if(writeInfo.bytesWritten<0){error()}else {if(callback){callback()}}})}catch(ex){error()}},close:function(){chrome.socket.destroy(this.socketId)},convertToSSL:function(onConnected,onConnectionError){if(this.ssl){return};var that=this;this.ssl=forge.tls.createConnection({server:false,verify:function(connection,verified,depth,certs){return true},connected:function(connection){this.connectionReady=true;onConnected();onConnectionError=null;that.consume()},tlsDataReady:function(connection){var data=connection.tlsData.getBytes();data=str2ab(data);that.writeImpl(data,this.writeCallback,this.writeError);this.writeCallback=null},dataReady:function(connection){var data=connection.data.getBytes();this.readCallback(str2ab(data))},closed:function(){that.ssl=null},error:function(connection,error){if(this.writeError){this.writeError()};if(this.readError){this.readError()};if(onConnectionError){onConnectionError()}}});this.ssl.readCallback=function(){};this.ssl.writeCallback=function(){};this.ssl.readError=function(){};this.ssl.writeError=function(){};if(!that.started){that.started=true;that.load()};this.ssl.handshake()}};function LineReader(socketStream){this.currentLine="";this.socketStream=socketStream}LineReader.prototype={readLine:function(callback,error){while(this.socketStream.hasAvailableData()){var str=this.socketStream.readChar();if(str=="\x0D"){continue};if(str=="\x0A"){var strLine=this.currentLine;this.currentLine="";callback(strLine);return}else {this.currentLine+=str}};if(this.socketStream.isFinished()){setTimeout(error,1000);return};if(!this.socketStream.hasAvailableData()){var that=this;this.socketStream.fill(function(){that.readLine(callback,error)})}}};function InputOutputContentLength(socketStream,socketOutputStream,iSize){this.socketStream=socketStream;this.socketOutputStream=socketOutputStream;this.iSize=iSize}InputOutputContentLength.prototype={run:function(callback,error){if(this.iSize==0){callback();return};var that=this;var buf=this.socketStream.readRaw(this.iSize);if(buf==null){if(this.socketStream.isFinished()){error()}else {this.socketStream.fill(function(){that.run(callback,error)})}}else {this.iSize-=buf.byteLength;var str=String.fromCharCode.apply(null, new Uint8Array(buf));this.socketOutputStream.write(buf,function(){if(that.iSize>0){that.socketStream.fill(function(){that.run(callback,error)})}else {callback()}},function(){error()})}}};function InputOutputChunked(socketStream,socketOutputStream){this.socketStream=socketStream;this.socketOutputStream=socketOutputStream;this.callback=null;this.error=null}InputOutputChunked.handleCRLF=function(inputOutput,callback,error){inputOutput.socketStream.readln(function(strLine){inputOutput.socketOutputStream.writeln(strLine,callback,function(){error()})},function(){error()})};InputOutputChunked.prototype={run:function(callback,error){this.callback=callback;this.error=error;this.readChunk()},readChunk:function(){var that=this;this.socketStream.readln(function(strLine){if(strLine!=null){var iChunkSize=parseInt(strLine,16);that.socketOutputStream.writeln(strLine,function(){if(iChunkSize>0){var inputOutput= new InputOutputContentLength(that.socketStream,that.socketOutputStream,iChunkSize);inputOutput.run(function(){InputOutputChunked.handleCRLF(that,function(){that.readChunk()},function(){that.error()})},function(){that.error()})}else {InputOutputChunked.handleCRLF(that,function(){that.callback()},function(){that.error()})}},function(){that.error()})}},function(){that.error()})}};function InputOutputChunkedToPlain(socketStream,socketOutputStream){this.socketStream=socketStream;this.socketOutputStream=socketOutputStream;this.callback=null}InputOutputChunkedToPlain.prototype={run:function(callback,error){this.callback=callback;this.error=error;this.readChunk()},readChunk:function(){var that=this;this.socketStream.readln(function(strLine){if(strLine!=null){var iChunkSize=parseInt(strLine,16);if(iChunkSize>0){var inputOutput= new InputOutputContentLength(that.socketStream,that.socketOutputStream,iChunkSize);inputOutput.run(function(){inputOutput.socketStream.readln(function(strLine){that.readChunk()},function(){that.error()})},function(){that.error()})}else {that.error();return}}},function(){that.error()})}};function ConnectionPool(){}ConnectionPool.connections= new Array();ConnectionPool.usedConnections= new Array();ConnectionPool.getConnection=function(strHost,iPort,strKProxyHost){var strKey=strHost+iPort;if(strKProxyHost){strKey+=strKProxyHost};var pool=ConnectionPool.connections[strKey];if(pool==null||pool.length==0){return  new Connection(strHost,iPort,strKProxyHost)};var con=pool.pop();ConnectionPool.usedConnections.push(con);return con};ConnectionPool.releaseConnection=function(connection){var strKey=connection.strHost+connection.iPort;if(connection.strKProxyHost){strKey+=connection.strKProxyHost};var pool=ConnectionPool.connections[strKey];if(pool==null){pool= new Array();ConnectionPool.connections[strKey]=pool};var i=ConnectionPool.usedConnections.indexOf(connection);if(i> -1){ConnectionPool.usedConnections.splice(i,1)};pool.push(connection)};ConnectionPool.stop=function(){var l=ConnectionPool.usedConnections.length;for(var i=0;i<l;i++){var con=ConnectionPool.usedConnections[0];con.close()};ConnectionPool.usedConnections= new Array();l=ConnectionPool.connections.length;for(var key in ConnectionPool.connections){var pool=ConnectionPool.connections[key];if(!pool){break};for(var j=0;j<pool.length;j++){pool[j].close()}};ConnectionPool.connections= new Array()};function Connection(strHost,iPort,strKProxyHost){this.strHost=strHost;this.iPort=iPort;this.socketId=null;this.socketStream=null;this.strKProxyHost=strKProxyHost}Connection.prototype={connect:function(callback,error,ssl){var that=this;chrome.socket.create("\x74\x63\x70",null,function(createInfo){that.socketId=createInfo.socketId;chrome.socket.connect(that.socketId,that.strHost,that.iPort,function(iResult){if(iResult<0){error()}else {that.socketStream= new SocketStream(that.socketId);if(ssl){that.socketStream.convertToSSL(callback,error)}else {callback()}}})})},isConnected:function(){return this.socketStream!=null},close:function(){this.socketStream.close();var i=ConnectionPool.usedConnections.indexOf(this);if(i> -1){ConnectionPool.usedConnections.splice(i,1)}},getSocketStream:function(){return this.socketStream}};function HTTPTunnel(clientSocketStream,serverSocketStream){this.clientSocketStream=clientSocketStream;this.serverSocketStream=serverSocketStream}HTTPTunnel.prototype={run:function(){this.runTunnel(this.clientSocketStream,this.serverSocketStream);this.runTunnel(this.serverSocketStream,this.clientSocketStream)},runTunnel:function(readSocketStream,writeSocketStream){var that=this;var buf=readSocketStream.readRaw(8192);if(buf==null){if(readSocketStream.isFinished()){writeSocketStream.close()}else {readSocketStream.fill(function(){that.runTunnel(readSocketStream,writeSocketStream)})}}else {writeSocketStream.write(buf,function(){that.runTunnel(readSocketStream,writeSocketStream)},function(){setTimeout(function(){writeSocketStream.close();readSocketStream.close()},5000)})}}}