import React from 'react'
import {Stack, Typography, Button} from '@mui/material'

import BodyPartImg from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImg from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
const extraDetail = [
    {
        icon: BodyPartImg,
        name: exerciseDetail.name
    },
    {
        icon: TargetImg,
        name: exerciseDetail.target
    },
    {
        icon: EquipmentImg,
        name: exerciseDetail.equipment
    },
]

return (
        <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
            <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} loading="lazy" className='detail-image' />
        <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
            <Typography variant='h3'>
                {exerciseDetail.name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong. {exerciseDetail.name} {` `}
                is one of the best exercises to target your {exerciseDetail.target}. It will help you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction='row' gap="24px" alignItems='center'>
                    <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                        <img src={item.icon} alt={exerciseDetail.bodyPart} style={{width: '50px', height: '50px'}} />
                    </Button>
                    <Typography textTransform='capitalize' variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
            </Stack>
        </Stack>
    ) 
}

export default Detail