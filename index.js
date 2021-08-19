/*    BINARY_OPS = 
    {
      "+": {
        
      },
      "-": {
        
      },
      "*": {
        
      },
      "/": {
        
      },
      "%": {
        
      },
      
    };
  
    ASSIGNMENT = {
      "=": {}
    };
 */  

function Interpreter()
{

    this.vars = {};
    this.functions = {};
}

Interpreter.prototype.tokenize = function (program)
{
    if (program === "")
        return [];

    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function (expr)
{
    var tokens = this.tokenize(expr);
    return tokens;

};


class Lexer {
   
    constructor(src){
                       
        this.binary_ops = 
        
        {
          "+": {
            
          },
          "-": {
            
          },
          "*": {
            
          },
          "/": {
            
          },
          "%": {
            
          },                              
          
        };


        this.src = src 
    }

    next() {
        this.src = this.src.trimStart();
    
        if (this.src.length == 0) {
            return null;
        }
    
        if (Object.keys(this.binary_ops).includes(this.src[0])) {  
            console.log("is BIN OP ");
            const token = this.src[0];  
            this.src = this.src.slice(1);
            return token;
        }
                                         
        for(let i=0;i < this.src.length; ++i){
            if (Object.keys(this.binary_ops).includes(this.src[i]) || this.src[i] ==  ' ') {
                const token = this.src.slice(0,i);
                this.src = this.src.slice(i);
                return token;
            }
        }
    

        const token = this.src;
        this.src= "";
        return token ;

    } 


}
        

function parse(lexer){
    let lhs = parse_primary(lexer);
    let op_token = lexer.next()
    if (op_token !== null) {

        if (op_token == "/" || op_token == "*") {

            let rhs = parse(lexer); 
            return {
                "op": op_token , 
                "lhs": lhs,
                "rhs" : rhs, 
            };
        }

    } 

    return lhs; 

}

function parse_primary(lexer) {

                                    return true;
    

}


lexer = new Lexer("1+4-8+ 89")
const tokens = []
for(let token= lexer.next();token !== null;token=lexer.next()) {
    tokens.push(token);

}


console.log(tokens); 
