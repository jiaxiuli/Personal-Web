import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {

  const matches800 = useMediaQuery('(max-width: 800px)');
  const matches500 = useMediaQuery('(max-width: 500px)');

  const getCol = () => {
    if (matches500) {
        return 2;
    }
    if (matches800) {
        return 4;
    }
    return 6;
  }

  return (
    <ImageList
      sx={{
        width: '100%',
        borderRadius: '16px',
    }}
      variant="quilted"
      cols={getCol()}
      rowHeight={160}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './other_photo/photo2.JPG',
    title: 'music palying',
    rows: 2,
    cols: 2,
  },
  {
    img: './other_photo/photo13.JPG',
    title: 'music palying',
  },
  {
    img: './other_photo/photo3.JPG',
    title: 'music palying',
  },
  {
    img: './other_photo/photo10.jpg',
    title: 'music palying',
    cols: 2,
    rows: 2,
  },
  {
    img: './other_photo/photo5.jpg',
    title: 'music palying',
    cols: 2,
    rows: 2,
  },
  {
    img: './other_photo/photo6.jpg',
    title: 'music palying',
    rows: 2,
    cols: 2,
  },
  {
    img: './other_photo/photo7.jpg',
    title: 'music palying',
  },
  {
    img: './other_photo/photo4.jpg',
    title: 'music palying',
  },
  {
    img: './other_photo/photo9.jpg',
    title: 'music palying',
    rows: 2,
    cols: 2,
  },
  {
    img: './other_photo/photo8.jpg',
    title: 'music palying',
    rows: 2,
  },
  {
    img: './other_photo/photo11.jpg',
    title: 'music palying',
  },
  {
    img: './other_photo/photo12.jpg',
    title: 'music palying',
    rows: 1,
  },
  {
    img: './other_photo/photo1.jpg',
    title: 'music palying',
  },
  {
    img: './other_photo/photo14.jpg',
    title: 'music palying',
  },
];