import {Box, Grid2} from "@mui/material";
import Number from "../../Components/Number/Number.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../App/App.ts";

const Checker = () => {
    const myCode = useSelector((state:RootState) => state.checker.code);

    console.log(myCode);
    return (
        <Box className="div">
            <Grid2 container direction="column">
                <Grid2 sx={{border:'1px solid black', height:'100px'}}>

                </Grid2>
                <Grid2 container sx={{border:'1px solid black'}} justifyContent='center'>
                    {Array.from({length:9}, (_, i)=> i + 1).map((i)=>(
                        <Number key={i} number={i}/>
                    ))}
                    <Number number={"<"}/>
                    <Number number={"c"}/>
                    <Number number={"Check"}/>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Checker;