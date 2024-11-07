import {Grid2} from "@mui/material";

interface Props{
    number:number | string
}

const Number:React.FC<Props> = ({number}) => {
    return (
        <Grid2 style={{ textAlign: "center", width:"33%",border:'2px solid black'}}>
            {number}
        </Grid2>
    );
};

export default Number;