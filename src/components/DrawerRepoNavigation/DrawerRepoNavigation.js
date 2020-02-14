import Button from '@material-ui/core/Button';
import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
export default class DrawerRepoNavigation extends Component {
    makeButton = (repo) => {
        return (
            <ListItem button>
                <ListItemIcon>
                    <DataUsageRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={repo.name} />
            </ListItem>
        );
    }

    render() {
        return this.props.repositories.map((repo) => {
            return <li>{this.makeButton(repo)}</li>
        });
    }
}

