import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#0d1117',
    },
    headerRoot: {
        padding: theme.spacing(5),
        borderBottom: '1px solid #30363d'
    },
    headerText: {
        color: '#c9d1d9',
        textAlign: 'center'
    },
    subtitle: {
        color: '#8b949e',
        textAlign: 'center',

    }
}));

const Layout = ({children, className, ...props}) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)} {...props}>
            <div className={classes.headerRoot}>
                <h1 className={classes.headerText}>
                    Trending
                </h1>
                <p className={classes.subtitle}>
                    See what the GitHub community is most excited about today.
                </p>
            </div>
            {children}
        </div>
    )
}   

export default Layout