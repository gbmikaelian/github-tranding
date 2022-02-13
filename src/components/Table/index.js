import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import clsx from 'clsx';
import { ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        maxWidth: 1012,
        margin: 'auto',
        border: '1px solid #30363d',
        borderRadius: 6
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#161B22',
        padding: theme.spacing(2),
    },
    button: {
        color: '#c9d1d9',
        background: '#0d1117',
        textTransform: 'capitalize',
        '&.active': {
            background: '#1f6feb',
            
        }
    },
    rightSection: {
        color: '#8b949e',
        display: 'flex',
        '& > div': {
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            display: 'flex', 
            alignItems: 'center'
        }
    }
}));

export const Table = ({children, location, ...props}) => {
    const classes = useStyles();

    const handleClick = (path) => () => {
        props.history.push(path)
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
            <ButtonGroup disableElevation>
                <Button
                    className={clsx(classes.button, location.pathname.includes('repositories') ? "active" : '')}
                    onClick={handleClick('/repositories')}>
                        Repositories
                </Button>
                <Button
                    className={clsx(classes.button, location.pathname.includes('developers') ? "active" : '')}
                    onClick={handleClick('/developers')}
                    >
                        Developers
                </Button>
            </ButtonGroup>
            <div className={classes.rightSection}>
                <div>
                    <span>Language: any</span>
                    <ArrowDropDown/>
                </div>
                <div>
                    <span>Date range: Today</span>
                    <ArrowDropDown/>
                </div>
            </div>
            </div>
            {children}
        </div>
    )
}

export default withRouter(Table)