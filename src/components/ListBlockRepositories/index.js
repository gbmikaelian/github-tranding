import React from 'react'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import { StarBorder } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import Icon from '../Icons';
import numberBeautifier from '../../helpers/numberBeautifier';

const flex = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const useStyles = makeStyles((theme) => ({
    sectionBlock: {
        '&:not(:last-child)': {
            borderBottom: '1px solid #30363d',
        },
        padding: theme.spacing(2)
    },
    flex,
    titleBlock: flex,
    title: {
        color: '#539bf5',
        fontSize: '1.2em'
    },
    button: {
        textTransform: 'capitalize',
        backgroundColor: '#21262d',
        borderRadius: '0.4rem',
        '&:hover': {
            backgroundColor: '#30363d',
        }
    },
    description: {
        width: '75%',
        fontSize: '0.9em'
    },
    infoBlock: {
        ...flex,
        fontSize: '0.77em',
        marginTop: '0.5rem',
        '& > div > *:not(:last-child)': {
            marginRight: '1rem'
        },
        '& a:hover': {
            color: '#68a6ff'
        },
        '& img': {
            borderRadius: '50%',
            paddingLeft: 4
        }
    }
}));
const theme = createTheme({
    palette: {
      primary: grey,
    },
  });

export const ListBlockRepositories = ({children, location, ...props}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                props.data.map(v => (
                    <div className={classes.sectionBlock}>
                        <a href={v.url} className={classes.titleBlock}>
                            <h1 className={classes.title}>
                                {v.username} 
                                {' / '}
                                {v.repositoryName}
                            </h1>
                            <ThemeProvider theme={theme}>
                                <Button size='small' variant='outlined' color='primary' className={classes.button}><StarBorder style={{ fontSize: 20 }}/>Star</Button>
                            </ThemeProvider>
                        </a>
                        <div className={classes.description}>
                            {v.description}
                        </div>
                        <div className={classes.infoBlock}>
                            <div className={classes.flex}>
                                {v.language && <span className={classes.language}>
                                    {v.language}
                                </span>}
                                <a className={classes.flex} href={`${v.url}/stargazers`}><StarBorder style={{ fontSize: 20 }}/> {numberBeautifier(v.totalStars)}</a>
                                <span className={classes.flex}><Icon fill='#768390' iconName='merge' width={20} /> {numberBeautifier(v.forks)}</span>
                                <span className={classes.flex}>
                                    Built by
                                    {
                                        v.builtBy.map(v => (
                                            <a href={v.url}>
                                                <img width={20} src={v.avatar} alt="" />
                                            </a>
                                        ))
                                    }
                                </span>
                            </div>
                            <div>
                                <span  className={classes.flex}><StarBorder style={{ fontSize: 20 }}/>{numberBeautifier(v.starsSince)} stars today</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default withRouter(ListBlockRepositories)