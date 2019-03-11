import React from 'react'
import './main.css'
import { Grid, Icon } from 'semantic-ui-react'

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-content">内容</div>
        <div className="main-menu">
          <Grid columns={4} divided>
            <Grid.Row>
              <Grid.Column>
                <div className="menu-icon">
                  <Icon name="home" size="small" color="orange" />
                </div>
                <div className="menu-name">菜单</div>
              </Grid.Column>
              <Grid.Column>
                <div className="menu-icon">
                  <Icon name="home" size="small" color="orange" />
                </div>
                <div className="menu-name">菜单</div>
              </Grid.Column>
              <Grid.Column>
                <div className="menu-icon">
                  <Icon name="home" size="small" color="orange" />
                </div>
                <div className="menu-name">菜单</div>
              </Grid.Column>
              <Grid.Column>
                <div className="menu-icon">
                  <Icon name="home" size="small" color="orange" />
                </div>
                <div className="menu-name">菜单</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
export default Main
