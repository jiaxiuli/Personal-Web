import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ResumeDownload = () => {
    const handleDownload = () => {
        const a = document.createElement('a')
        a.download = 'Resume-Jiaxiu Li'
        a.href = './Resume-Jiaxiu Li.pdf'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <Box sx={{
            marginTop: '12px',
            padding: '12px',
            "@media screen and (max-width: 900px)": {
                padding: '0px',
            },
        }}>
            <Button
                sx={{
                    borderRadius: '18px',
                    width: '180px',
                    background: '#0d47a1',
                    fontWeight: 600
                }}
                variant="contained"
                startIcon={<CloudDownloadIcon />}
            >
                Resume
            </Button>
        </Box>
    )
};

export default ResumeDownload;