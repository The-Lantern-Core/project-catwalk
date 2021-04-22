import React from 'react';
import WidgetContext from '../../../WidgetContext.jsx';

const Filter = (props) => (
  <div className='review-filter-view'>
    {props.filter.map((on, i) => {
      if (on) {
        return (
          <div className='review-individual-filter-view' key={'filter-' + i}>
            {i + 1} stars &nbsp;

            <WidgetContext.Consumer>
            {({addWidgetName}) => {
              return (
                <span {...addWidgetName()} className='review-individual-filter-view-x' style={{'cursor':'default'}}
                onClick={() => {
                  props.toggleFilter(i);
                }}>✕</span>
              )
            }}
            </WidgetContext.Consumer>

          </div>
        )
      }
    })}
  </div>
)

export default Filter;