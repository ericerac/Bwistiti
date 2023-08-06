

const StringParse = (x)=>{
    //console.log("PARSE USER",x);
    const stringi = JSON.stringify(x);
             // console.log("STRINGiFY ---->", stringi );
            const parsi = JSON.parse(stringi);
                //console.log("PARSI ---->", parsi );

            const userValue = parsi._value
              //console.log("PARSI VALUE ---->", userValue);
           
            return {userValue, parsi}
}
export default StringParse