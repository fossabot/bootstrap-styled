import { fromJS } from 'immutable';
import { defaultProps, card } from '../card';

describe('bootstrap card utility', () => {
  it('card should return a css for card', () => {
    const css = card(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$card-spacer-y'],
      defaultProps['$card-spacer-x'],
      defaultProps['$card-bg'],
      defaultProps['$card-border-width'],
      defaultProps['$card-border-color'],
      defaultProps['$card-border-radius'],
      defaultProps['$card-margin-y-halved'],
      defaultProps['$card-margin-x-halved'],
      defaultProps['$card-cap-bg'],
      defaultProps['$card-border-radius-inner'],
      defaultProps['$brand-primary'],
      defaultProps['$brand-success'],
      defaultProps['$brand-info'],
      defaultProps['$brand-warning'],
      defaultProps['$brand-danger'],
      defaultProps['$btn-primary-bg'],
      defaultProps['$btn-secondary-border'],
      defaultProps['$btn-info-bg'],
      defaultProps['$btn-success-bg'],
      defaultProps['$btn-warning-bg'],
      defaultProps['$btn-danger-bg'],
      defaultProps['$card-link-hover-color'],
      defaultProps['$card-img-overlay-padding'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(356361916);
  });
  it('card should have arguments', () => {
    const css = card();
    expect(fromJS({ css }).hashCode()).toEqual(356361916);
  });
});
