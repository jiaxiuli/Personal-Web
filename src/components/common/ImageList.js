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

export default function QuiltedImageList({ direction='vertical', work }) {

  const matches = useMediaQuery('(max-width: 650px)');
  const [itemDataV, setItemDataV] = React.useState([
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
    }])

    const [itemDataH, setItemDataH] = React.useState([
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
    ])

    React.useEffect(() => {
      if (work === 'liAuto') {
        setItemDataV([
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
          }]);
        setItemDataH([
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
        ])
      }

      if (work === 'yuanFuDao') {
        setItemDataV([
          {
            img: './photos/yuanfudao_env.jpg',
            title: 'Breakfast',
            rows: 2,
            cols: 4,
          },
          {
            img: './photos/yuanfudao_place.jpg',
            title: 'Burger',
            cols: 2,
            rows: 1,
          },
          {
            img: './photos/yuanfudao_card.jpg',
            title: 'Camera',
            cols: 2,
            rows: 1,
          }]);
        setItemDataH([
            {
              img: './photos/yuanfudao_env.jpg',
              title: 'Breakfast',
              rows: 1,
              cols: 2,
            },
            {
              img: './photos/yuanfudao_place.jpg',
              title: 'Burger',
              cols: 1,
              rows: 1,
            },
            {
              img: './photos/yuanfudao_card.jpg',
              title: 'Camera',
              cols: 1,
              rows: 1,
            }
        ])
      }
    }, [work]);

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
            overflow: 'hidden'
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