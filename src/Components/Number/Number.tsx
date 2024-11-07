import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addNumber, checkCode, deleteAll, deleteOneSymbol} from "../../Container/Checker/CheckerSlice.ts";
import {RootState} from "../../App/App.ts";

interface Props{
    symbol:string
}

const Number:React.FC<Props> = ({symbol}) => {
    const value = useSelector((state:RootState)=>state.checker.value)

    const dispatch = useDispatch();
    const func = ()=>{
        if(symbol === "c"){
            dispatch(deleteAll())
        }
        else if(symbol === '<'){
            dispatch(deleteOneSymbol())
        }
        else if(symbol === 'Check'){
            dispatch(checkCode())
        }
        else{
            dispatch(addNumber(symbol))
        }
    }

    const isDisabled = (!["Check", "<", "c"].includes(symbol)) && value.length === 4
    return (
           <Button
               disabled={isDisabled}
               onClick={func}
               style={{
                   paddingTop: 'auto',
                   textAlign: "center",
                   width:"33%",
                   border:'2px solid black',
                   height:'50px'}}
               variant="contained" color="primary">
               {symbol}
           </Button>
    );
};

export default Number;