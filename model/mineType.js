module.exports = function mineType(type){
   switch (type){
       case '.html':
           return 'text/html';
       case '.css':
           return 'text/css';
       case '.js':
           return 'text/javascript';
       default:
           return 'text/html';

   }
};