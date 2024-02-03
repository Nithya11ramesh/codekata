// Difference between http://1.1 and http://2.

/*http-hypertext Transfer Protocol.

point-1:
In http/1.1 loads resources one after the other.
In http/2 is able to use a single TCP(Transmission Control Protocol) connection to send multiple streams of data at a once.

point-2:
http/1.1 works on the text/plain format.
http/2 works on the binary protocol.

point-3:
http/1.1 compress data by itself.
http/2 uses HPACK for data compression.

point-4:
1. http/1.1 does not support keep-alive.
2. http/2 supports keep-alive.

point-5:
1. http/1.1 does not support chunked encoding.
2. http/2 supports chunked encoding.*/
