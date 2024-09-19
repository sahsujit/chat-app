import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { alpha, useTheme } from "@mui/material/styles"
import Embed from "react-embed";
import { DownloadSimple, Image } from 'phosphor-react';



const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.default, 1)
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={1}>
            <img
              src={el.img}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              {el.message}
            </Typography>
          </Stack>
        </Box>
      
      </Stack>
    );
  };

const TextMsg = ({ el }) => {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.default, 1)
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Typography
            variant="body2"
            
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Box>
        
      </Stack>
    );
  };

  const ReplyMsg = ({ el }) => {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.paper, 1)
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="column"
              spacing={3}
              alignItems="center"
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 1),
  
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" color={theme.palette.text}>
                {el.message}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              {el.reply}
            </Typography>
          </Stack>
        </Box>
       
      </Stack>
    );
  };

  const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.default, 1)
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="column"
              spacing={3}
              alignItems="start"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <Stack direction={"column"} spacing={2}>
              <Embed
                width="300px"
                isDark
                url={`https://youtu.be/xoWxBR34qLE`}
              />
              </Stack>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              <div dangerouslySetInnerHTML={{ __html: el.message }}></div>
            </Typography>
          </Stack>
        </Box>
       
      </Stack>
    );
  };


  const DocMsg = ({ el }) => {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.default, 1)
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <Image size={48} />
              <Typography variant="caption">Abstract.png</Typography>
              <IconButton>
                <DownloadSimple />
              </IconButton>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              {el.message}
            </Typography>
          </Stack>
        </Box>
       
      </Stack>
    );
  };

const Timeline = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack
            direction={"row"}
            alignItems={"centre"}
            justifyContent={"space-between"}
        >
            
            <Divider width="46%" />

            <Typography
                variant={"caption"}
                sx={{ color: theme.palette.text }}
            >
                {el.text}

            </Typography>

            <Divider width="46%" />




        </Stack>
    )
}

export { Timeline , TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg }