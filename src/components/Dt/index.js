/**
 * Description Term
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

const defaultProps = { theme: bsTheme };

class Dt extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <dt className={className} {...rest}>
        {children}
      </dt>
    );
  }
}

// eslint-disable-next-line no-class-assign
Dt = styled(Dt)` 
  ${(props) => `
    /* Reboot Scss */
    font-weight: ${props.theme['$dt-font-weight']};
  `}
`;

Dt.defaultProps = defaultProps;

export default Dt;
