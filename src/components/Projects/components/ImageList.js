import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList({ pics, objectPosition='left top' }) {

  const itemData = [
    {
      // img: './photos/lifelink1.png',
      img: pics[0],
      title: 'lifelink1',
      rows: 2,
      cols: 4,
    },
    {
      // img: './photos/lifelink2.png',
      img: pics[1],
      title: 'lifelink2',
      cols: 4,
      rows: 1,
    },
  ];

  return (
    <Box sx={{ 
      width: '100%',
      height: '100%' , 
      borderRadius: '12px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
    }}>
        <ImageList
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                mt: 0,
                mb: 0,
                overflow: 'hidden'
            }}
            variant="quilted"
            cols={4}
            // rowHeight={121}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    style={{
                      objectPosition: objectPosition
                    }}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    </Box>
  
  );
}
