let Message = "Hello, This is module portion"

  export default function sum(a,b)
{
        console.log("sum : "+(a+b))
};
function sub(a,b)
{
    console.log("sub : "+(a-b))
};

function calculator()
{
    console.log("Your r in Default export repo")
}

//export {sum as default};
export {sub, calculator as cal}
export {HelloPRint} from './Module_2.mjs'