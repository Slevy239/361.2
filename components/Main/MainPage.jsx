import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './main.css'
import Nav from '../Nav/nav';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import Modal from '@mui/material/Modal';
import data from '../../data/data'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

const Main = () => {


    const [openDelete, setOpenDel] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openNew, setOpenNew] = React.useState(false);



    const handleNew = () => setOpenNew(true);
    const handleOpenDelete = () => setOpenDel(true);
    const handleOpenEdit = () => setOpenEdit(true);

    const handleCloseEdit = () => setOpenEdit(false);
    const handleCloseNew = () => setOpenNew(false);
    const handleCloseDelete = () => setOpenDel(false);



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const handleEdit = (id) => {
        handleOpenEdit();
    }
    const handleEditCancel = () => {
        handleCloseEdit()
    }

    const handleDelete = (id) => {
        handleOpenDelete();
    }
    const deleteTask = (id) => {
        alert("The task has been deleted");
        handleCloseDelete();
    }
    const handleAdd = () => {
        handleNew();
    }
    const saveNew = () => {
        alert("Task Saved!");
        handleCloseNew();
    }
    const saveNewDraft = () => {
        alert('Saved As Draft!')
        handleCloseNew();
    }
    const handleComplete = (task) => {
        alert(task.title + ' Completed')
    }
    const submitEdit = () => {
        alert('Task Edited');
        handleCloseEdit();
    }


    return (
        <div>
            <Nav />

            <Stack direction={{ xs: 'column', sm: 'row' }}
                alignItems="center">
                <Item><Button onClick={() => handleAdd()}> <AddIcon /> </Button></Item>
                <Item sx={{ mx: "auto", width: 150 }}>User Name</Item>
                <Item><Button href='/settings'>User Preferences</Button></Item>
            </Stack>



            <Box sx={{ mx: "auto" }}>
                <Stack>

                    <Typography component="div">
                        Tasks to be completed:
                    </Typography>


                    {data.map((item, i) =>
                        <li className='list-group-item' key={i} data-id={item.id} >{item.name}
                            {data[i].title}
                            <Button onClick={() => handleComplete(item)}><CheckIcon /></Button>

                            <Button onClick={() => handleEdit(item.id)}><EditIcon /></Button>
                            <Button onClick={() => handleDelete(item.id)}><RemoveIcon /></Button>

                        </li>
                    )}
                </Stack>
            </Box>

            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Text
                    </Typography>
                    <form>
                        <input type='text' name='edit' />
                        <Button onClick={submitEdit}>Submit</Button>
                        <Button onClick={handleEditCancel}>Cancel</Button>
                    </form>
                </Box>
            </Modal>


            <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete this task?
                    </Typography>
                    <Button onClick={deleteTask}>Yes</Button>
                    <Button onClick={handleCloseDelete}>Cancel</Button>
                </Box>
            </Modal>

            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        add a task
                    </Typography>
                    <form>
                        <input type='text' name='edit' />
                        <input type="submit" value="Submit"></input>
                    </form>
                    <Button onClick={saveNew}>Save</Button>
                    <Button onClick={saveNewDraft}>Save As Draft</Button>

                </Box>
            </Modal>

        </div >
    );
}

export { Main };