import {Box, Grid2, Typography} from "@mui/material";
import Number from "../../Components/Number/Number.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../App/App.ts";


const Checker = () => {
    const checked = useSelector((state:RootState) => state.checker.checked);
    const codeValue = useSelector((state:RootState)=> state.checker.value)

    const output = checked === "green"? "Access Granted" : checked == "red" ? "Access Denied": codeValue


    return (
        <Box className="div">
            <Grid2 container direction="column">
                <Grid2
                    container
                    justifyContent='center'
                    alignItems='center'
                    sx={{border:'1px solid black',
                        height:'100px',
                        backgroundColor: checked}}>
                    <Typography variant="h5" gutterBottom>
                        {output}
                    </Typography>
                </Grid2>
                <Grid2 container sx={{border:'1px solid black'}} justifyContent='center'>
                    {Array.from({length:9}, (_, i)=> i + 1).map((i)=>(
                        <Number key={i} symbol={i.toString()}/>
                    ))}
                    <Number symbol={"<"}/>
                    <Number symbol={"c"}/>
                    <Number symbol={"Check"}/>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Checker;