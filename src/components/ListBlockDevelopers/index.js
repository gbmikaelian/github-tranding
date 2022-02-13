import React from 'react'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import clsx from 'clsx';
import { grey } from '@material-ui/core/colors';
import Icon from '../Icons';

const flex = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const useStyles = makeStyles((theme) => ({
    sectionBlock: {
        ...flex,
        '&:not(:last-child)': {
            borderBottom: '1px solid #30363d',
        },
        alignItems: 'end',
        padding: theme.spacing(2)
    },
    flex,
    titleBlock: {
        ...flex,
        justifyContent: 'flex-start',
        '& img': {
            borderRadius: '50%',
            paddingRight: 4,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        },
        '&:first-child': {
            alignItems: 'end'
        },
        width: '35%'
    },
    rank: {
        fontSize: '0.8em'
    },
    title: {
        color: '#539bf5',
        fontSize: '1.2em'
    },
    button: {
        textTransform: 'capitalize',
        float: 'right',
        backgroundColor: '#21262d',
        borderRadius: '0.4rem',
        '&:hover': {
            backgroundColor: '#30363d',
        },
    },
    buttonGroup: {
        width: '30%'
    },
    description: {
        fontSize: '0.8em',
        width: '35%'
    },
    fireIcon: {
        textTransform: 'uppercase',
        justifyContent: 'flex-start',
        '& > svg': {
            paddingRight: '0.2rem'
        }
    },
    repoIcon: {
        justifyContent: 'flex-start',
        '& > svg': {
            paddingRight: '0.4rem'
        }
    },
    repositoryName: {
        color: '#539bf5',
        fontSize: '1.3em',
        textTransform: 'capitalize'
    }
}));
const theme = createTheme({
    palette: {
      primary: grey,
    },
  });

export const ListBlockDevelopers = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                props.data.map(v => (
                    <div className={classes.sectionBlock}>
                        <a href={v.url} className={classes.titleBlock}>
                            <div className={classes.rank}>{v.rank}</div>
                            <img width={48} src={v.avatar} alt="" />
                            <div>
                                <h1 className={classes.title}>
                                    {v.name} 
                                </h1>
                                <div>
                                    {v.username}
                                </div>
                            </div>
                        </a>
                        <div className={classes.description}>
                            <div className={clsx(classes.flex, classes.fireIcon)}>
                                <Icon width={16} fill='#c96a2d' iconName='fire' />
                                Popular repo
                            </div>
                            <div className={clsx(classes.flex, classes.repoIcon)}>
                                <Icon width={16} fill='#768390' iconName='repo' />
                                <a href={v.popularRepository.url} className={classes.repositoryName}>{v.popularRepository.repositoryName}</a>
                            </div>
                            <div className={clsx(classes.flex, classes.repoIcon)}>
                                {v.popularRepository.description}
                            </div>
                        </div>
                        <div className={classes.buttonGroup}>
                            <ThemeProvider theme={theme}>
                                <Button size='small' variant='outlined' color='primary' className={classes.button}>Follow</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default withRouter(ListBlockDevelopers)