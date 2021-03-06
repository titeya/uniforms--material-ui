import connectField from 'uniforms/connectField'
import filterDOMProps from 'uniforms/filterDOMProps'
import joinName from 'uniforms/joinName'
import List from '@material-ui/core/List'
import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import { Children } from 'react'

import ListAddField from './ListAddField'
import ListItemField from './ListItemField'

const List_ = ({
  children,
  initialCount,
  itemProps,
  label,
  name,
  value,
  ...props
}) => (
  <List
    subheader={
      label ? <ListSubheader disableSticky>{label}</ListSubheader> : undefined
    }
  >
    {children
      ? value.map((item, index) =>
          Children.map(children, child =>
            React.cloneElement(child, {
              key: index,
              label: null,
              name: joinName(
                name,
                child.props.name && child.props.name.replace('$', index)
              )
            })
          )
        )
      : value.map((item, index) => (
        <ListItemField
          key={index}
          label={null}
          name={joinName(name, index)}
          {...itemProps}
          />
        ))}
    <ListItem>
      <CardActions>
        <ListAddField name={`${name}.$`} initialCount={initialCount} />
      </CardActions>
    </ListItem>
  </List>
)

export default connectField(List_, { includeInChain: false })
