import { Box, Button, Grid, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';

function Test() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        school: '',
        favFood: '',
        favColor: ''
    })
    const [gridData, setGridData] = useState([]);
    const [gridRefresh, setGridRefresh] = useState(false);

    useEffect(() => {
        GetTestItem();
    }, [])

    useEffect(() => {
        GetTestItem();
    }, [gridRefresh])

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    const AddDetails = (e) => {
        setGridRefresh(false)
        e.preventDefault();
        const submitModel = {
            name: formData.name,
            age: parseInt(formData.age),
            school: formData.school,
            favFood: formData.favFood,
            favColor: formData.favColor
        }
        console.log("submitModel::> ", submitModel)

        axios.post('http://localhost:8080/api/Test/testItemCreate', submitModel).then((res) => {
            console.log("res ", res);
            if (res.data.status == "Success") {
                setFormData({
                    ...formData,
                    name: '',
                    age: '',
                    school: '',
                    favFood: '',
                    favColor: ''
                })
                setGridRefresh(true)
            }
        }).catch((err) => {
            console.log("Error ", err)
        })
    }

    function GetTestItem() {
        axios.get('http://localhost:8080/api/Test/testItemGet').then((res) => {
            console.log("res ", res)
            if (res.data.length > 0) {
                setGridData(res.data)
            }
        })
    }

    console.log("gridData ", gridData)


    return (
        <>
            <Box sx={{ height: '100vh', width: '100', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <form onSubmit={AddDetails}>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="standard-basic"
                                label="Name"
                                variant="standard"
                                name='name'
                                size='small'
                                value={formData.name}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="standard-basic"
                                label="Age"
                                variant="standard"
                                name='age'
                                size='small'
                                value={formData.age}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="standard-basic"
                                label="School"
                                variant="standard"
                                name='school'
                                size='small'
                                value={formData.school}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="standard-basic"
                                label="Favourite Food"
                                variant="standard"
                                name='favFood'
                                size='small'
                                value={formData.favFood}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="standard-basic"
                                label="Favourite Color"
                                variant="standard"
                                name='favColor'
                                size='small'
                                value={formData.favColor}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                    </Grid>
                    <Box display="flex" flexDirection="row-reverse" p={2} >
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained"
                            size='small'
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
                <br />
                <br />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">School</TableCell>
                                <TableCell align="center">Favourite Food</TableCell>
                                <TableCell align="center">Favourite Color</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gridData.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.age}</TableCell>
                                    <TableCell align="center">{row.school}</TableCell>
                                    <TableCell align="center">{row.favFood}</TableCell>
                                    <TableCell align="center">{row.favColor}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>


        </>
    )
}

export default Test