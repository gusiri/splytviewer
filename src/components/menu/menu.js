import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './menu.css';
import MenuIcon from '../menu-icon/menu-icon';
import Toggle from '../toggle/toggle';
import RadioGroup from '../radio-group/radio-group';
import ExampleSelect from '../example-select/example-select';
import {
  FROM_DEFAULT_COLOR,
  FROM_EXAMPLES,
  TO_DEFAULT_COLOR,
  TO_EXAMPLES
} from '../../config';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {menu: false};
  }

  setOption(option) {
    const {options, onChange} = this.props;
    const newOptions = {...options, ...option};
    onChange(newOptions);
  }

  render() {
    const {menu} = this.state;
    const {onToggle, options} = this.props;
    const {
      contractCalls,
	stakeManager,
	splytManager,
	assetManager,
	orderManager,
	arbitrationManager,
	reputationManager,
      sortOrder
    } = options;
    const classes = `menu ${menu ? 'menu--open' : ''}`;

    return (
      <div className={classes}>
        <MenuIcon
          open={menu}
          onClick={() => {
            this.setState({menu: !menu});
            onToggle(!menu);
          }}
        />
        <div className="menu__content">
          <div className="menu-heading">Splyt Transaction Viewer</div>


          <Toggle
            label="All Splyt Transactions"
            cssClasses="mdl-switch--calls"
            checked={contractCalls}
            onChange={() => this.setOption({contractCalls: !contractCalls})}
        
           />



          <Toggle
            label="Stake Manager"
            cssClasses="mdl-switch--stakeManager"
            checked={stakeManager}
            onChange={() => this.setOption({stakeManager: !stakeManager})}
        
           />

 
          <Toggle
            label="Splyt Manager"
            cssClasses="mdl-switch--splytManager"
            checked={splytManager}
            onChange={() => this.setOption({splytManager: !splytManager})}
        
           />

         <Toggle
            label="Asset Manager"
            cssClasses="mdl-switch--assetManager"
            checked={assetManager}
            onChange={() => this.setOption({assetManager: !assetManager})}
        
           />


          <Toggle
            label="Order Manager"
            cssClasses="mdl-switch--orderManager"
            checked={orderManager}
            onChange={() => this.setOption({orderManager: !orderManager})}
          />


          <Toggle
            label="Arbitration Manager"
            cssClasses="mdl-switch--arbitrationManager"
            checked={arbitrationManager}
            onChange={() => this.setOption({arbitrationManager: !arbitrationManager})}
          />


          <Toggle
            label="Reputation Manager"
            cssClasses="mdl-switch--reputationManager"
            checked={reputationManager}
            onChange={() => this.setOption({reputationManager: !reputationManager})}
	  />




          <ExampleSelect placeholder="From"
            examples={FROM_EXAMPLES}
            identifier="from"
            defaultColor={FROM_DEFAULT_COLOR}
            onChange={({value, color}) => this.setOption({
              fromAddress: value,
              fromColor: color
            })}/>

          <ExampleSelect placeholder="To"
            examples={TO_EXAMPLES}
            identifier="to"
            defaultColor={TO_DEFAULT_COLOR}
            onChange={({value, color}) => this.setOption({
              toAddress: value,
              toColor: color
            })}/>

          <div className="menu-heading">Sort by</div>

          <RadioGroup
            value={sortOrder}
            groupName="sortOrder"
            options={[
              {value: 'index', label: 'Index'},
              {value: 'value', label: 'Ether Value'},
              {value: 'gasPrice', label: 'Gas Price'},
              {value: 'gasLimit', label: 'Gas Limit'}
            ]}
            onChange={value => this.setOption({sortOrder: value})}
          />

        </div>
        <footer>
          {
          }
          <div className="logos">
            <a href="https://twitter.com/splytcore" className="twitter" />
            <a
              href="https://github.com/splytcore"
              className="github"
            />
          </div>

          <br />
          <div className="attributions">
            
            <br />
            <br />
            Powered by <a href="https://www.spl.yt">Splytcore.com</a>
          </div>
        </footer>
      </div>
    );
  }
}
