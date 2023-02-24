import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import {
    styled,
    Card,
    Typography,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    AvatarGroup,
    IconButton,
    Fade,
    Stack
} from '@mui/material';

import PreviewIcon from '@mui/icons-material/Preview';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';





const languages_img = {
    "python": "https://profilinator.rishav.dev/skills-assets/python-original.svg",
    "js": "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
    "jquery": "https://profilinator.rishav.dev/skills-assets/jquery.png",
    "mysql": "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg",
    "oracle": "https://profilinator.rishav.dev/skills-assets/oracle-original.svg",
    "php": "https://profilinator.rishav.dev/skills-assets/php-original.svg",
    "html": "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
    "css": "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
    "latex": "https://profilinator.rishav.dev/skills-assets/latex.png",
    "react": "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
    "c++": "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg",
    "c": "https://profilinator.rishav.dev/skills-assets/c-original.svg",
    "java": "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg",
    "git": "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    "android": "https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg",
    "linux": "https://profilinator.rishav.dev/skills-assets/linux-original.svg"
};





const ExpandMore = styled(
    (props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    }
)(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardUnit({ Languages, GitHubRepo, Name, Date, ImageLight, ImageDark, Comment, Description, PreviewURL, Type }) {

    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(false);
    const [cookies] = useCookies(['mode']);
    const navigate = useNavigate();
    const handleShareClick = () => {
        navigator.clipboard.writeText('https://leogendra.github.io/Portfolio/#/projects');
        setVisible(true);
        setTimeout(() => { setVisible(false); }, 2800);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 550, margin: '0 auto', float: 'none', boxShadow: 3, borderRadius: 3, '&:hover': { boxShadow: 20, borderRadius: 8 } }}>
            <CardHeader
                avatar={
                    <AvatarGroup max={4}>
                        {Languages.map((index) => (
                            <a rel='noopener noreferrer' target='_blank' key={index}>
                                {<Avatar alt={index}
                                    src={languages_img[index]} />}
                            </a>
                        ))}
                    </AvatarGroup>
                }
                action={
                    <a href={GitHubRepo} rel='noopener noreferrer' target='_blank'>
                        <IconButton aria-label='repo' sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                            <GitHubIcon />
                        </IconButton>
                    </a>
                }
                title={Name}
                subheader={Date}
            />
            <CardMedia
                component='img'
                height='300'
                image={cookies.mode === 'dark' ? require('../../static/images/projects/' + ImageDark) : require('../../static/images/projects/' + ImageLight)}
                alt='Image not found'
            />
            <CardContent>
                <Stack direction='row' spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
                    {Type == 'school' && <SchoolIcon sx={{ color: 'text.secondary' }} />}
                    {Type == 'personal' && <PersonIcon sx={{ color: 'text.secondary' }} />}
                    <Typography variant='body2' color='text.secondary'>
                        {Comment}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton disabled onClick={() => navigate('/' + PreviewURL)} aria-label='preview' sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                    <PreviewIcon />
                </IconButton>
                <IconButton aria-label='share' onClick={handleShareClick} sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                    <ShareIcon />
                </IconButton>
                <Fade in={visible === true} timeout={400}>
                    <Typography variant='caption' color='primary'>Lien copié !</Typography>
                </Fade>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='showMore'
                    sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {Description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
