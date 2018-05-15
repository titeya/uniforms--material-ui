import Card          from '@material-ui/core/Card';
import CardActions   from '@material-ui/core/CardActions';
import CardContent   from '@material-ui/core/CardContent';
import ListItem      from '@material-ui/core/ListItem';
import React         from 'react';
import {Children}    from 'react';
import connectField  from 'uniforms/connectField';
import joinName      from 'uniforms/joinName';

import AutoField    from './AutoField';
import ListDelField from './ListDelField';
import wrapField    from './wrapField';

const ListItem_ = props => (
    <ListItem>
        {wrapField({gridProps: {xs: 12}, ...props}, (
            <Card>
                <CardContent>
                    {props.children ? (
                        Children.map(props.children, child =>
                            React.cloneElement(child, {
                                name: joinName(props.name, child.props.name),
                                label: null
                            })
                        )
                    ) : (
                        <AutoField {...props} />
                    )}
                </CardContent>
                <CardActions>
                    <ListDelField name={props.name} icon={props.delIcon} />
                </CardActions>
            </Card>
        ))}
    </ListItem>
);

export default connectField(ListItem_, {includeInChain: false, includeParent: true});


