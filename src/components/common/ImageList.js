import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList({ direction='vertical' }) {

  const matches = useMediaQuery('(max-width: 650px)');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
       <ImageList
          sx={{ 
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            mt: 0,
            mb: 0,
        }}
          variant="quilted"
          cols={4}
          rows={4}
          rowHeight={matches ? 130 : 'auto'}
        >
          {
            direction === 'vertical' ?
            itemDataV.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 130, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            )) : 
            itemDataH.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 130, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>
    </Box>
  );
}
const itemDataH = [
  {
    img: './photos/li-auto-work.jpg',
    title: 'Breakfast',
    rows: 1,
    cols: 2,
  },
  {
    img: './photos/li-auto-place.jpg',
    title: 'Burger',
    cols: 1,
    rows: 1,
  },
  {
    img: './photos/li-auto-card.jpg',
    title: 'Camera',
    cols: 1,
    rows: 1,
  }
];

const itemDataV = [
  {
    img: './photos/li-auto-work.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 4,
  },
  {
    img: './photos/li-auto-place.jpg',
    title: 'Burger',
    cols: 2,
    rows: 1,
  },
  {
    img: './photos/li-auto-card.jpg',
    title: 'Camera',
    cols: 2,
    rows: 1,
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   title: 'Coffee',
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  //   author: '@arwinneil',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   cols: 2,
  // },
];