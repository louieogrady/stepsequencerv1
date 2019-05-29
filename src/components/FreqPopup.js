import React from "react";
import { Button, Grid, Header, Popup, Segment } from "semantic-ui-react";

const timeoutLength = 8000;

class FreqPopup extends React.Component {
  state = { isOpen: false };

  handleOpen = () => {
    this.setState({ isOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false });
    }, timeoutLength);
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  };

  render() {
    const freqTable = (
      <table border="">
      	<tbody>
      		<tr>
      			<td align="center">F<sub>1</sub></td>
      			<td align="center">43.65</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;F<sup>#</sup><sub>1</sub>/G<sup>b</sup><sub>1</sub>&nbsp;</td>
      			<td align="center">46.25</td>
      		</tr>
      		<tr>
      			<td align="center">G<sub>1</sub></td>
      			<td align="center">49.00</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;G<sup>#</sup><sub>1</sub>/A<sup>b</sup><sub>1</sub>&nbsp;</td>
      			<td align="center">51.91</td>
      		</tr>
      		<tr>
      			<td align="center">A<sub>1</sub></td>
      			<td align="center">55.00</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;A<sup>#</sup><sub>1</sub>/B<sup>b</sup><sub>1</sub>&nbsp;</td>
      			<td align="center">58.27</td>
      		</tr>
      		<tr>
      			<td align="center">B<sub>1</sub></td>
      			<td align="center">61.74</td>
      		</tr>
      		<tr>
      			<td align="center">C<sub>2</sub></td>
      			<td align="center">65.41</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;C<sup>#</sup><sub>2</sub>/D<sup>b</sup><sub>2</sub>&nbsp;</td>
      			<td align="center">69.30</td>
      		</tr>
      		<tr>
      			<td align="center">D<sub>2</sub></td>
      			<td align="center">73.42</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;D<sup>#</sup><sub>2</sub>/E<sup>b</sup><sub>2</sub>&nbsp;</td>
      			<td align="center">77.78</td>
      		</tr>
      		<tr>
      			<td align="center">E<sub>2</sub></td>
      			<td align="center">82.41</td>
      		</tr>
      		<tr>
      			<td align="center">F<sub>2</sub></td>
      			<td align="center">87.31</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;F<sup>#</sup><sub>2</sub>/G<sup>b</sup><sub>2</sub>&nbsp;</td>
      			<td align="center">92.50</td>
      		</tr>
      		<tr>
      			<td align="center">G<sub>2</sub></td>
      			<td align="center">98.00</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;G<sup>#</sup><sub>2</sub>/A<sup>b</sup><sub>2</sub>&nbsp;</td>
      			<td align="center">103.83</td>
      		</tr>
      		<tr>
      			<td align="center">A<sub>2</sub></td>
      			<td align="center">110.00</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;A<sup>#</sup><sub>2</sub>/B<sup>b</sup><sub>2</sub>&nbsp;</td>
      			<td align="center">116.54</td>
      		</tr>
      		<tr>
      			<td align="center">B<sub>2</sub></td>
      			<td align="center">123.47</td>
      		</tr>
      		<tr>
      			<td align="center">C<sub>3</sub></td>
      			<td align="center">130.81</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;C<sup>#</sup><sub>3</sub>/D<sup>b</sup><sub>3</sub>&nbsp;</td>
      			<td align="center">138.59</td>
      		</tr>
      		<tr>
      			<td align="center">D<sub>3</sub></td>
      			<td align="center">146.83</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;D<sup>#</sup><sub>3</sub>/E<sup>b</sup><sub>3</sub>&nbsp;</td>
      			<td align="center">155.56</td>
      		</tr>
      		<tr>
      			<td align="center">E<sub>3</sub></td>
      			<td align="center">164.81</td>
      		</tr>
      		<tr>
      			<td align="center">F<sub>3</sub></td>
      			<td align="center">174.61</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;F<sup>#</sup><sub>3</sub>/G<sup>b</sup><sub>3</sub>&nbsp;</td>
      			<td align="center">185.00</td>
      		</tr>
      		<tr>
      			<td align="center">G<sub>3</sub></td>
      			<td align="center">196.00</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;G<sup>#</sup><sub>3</sub>/A<sup>b</sup><sub>3</sub>&nbsp;</td>
      			<td align="center">207.65</td>
      		</tr>
      		<tr>
      			<td align="center">A<sub>3</sub></td>
      			<td align="center">220.00</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;A<sup>#</sup><sub>3</sub>/B<sup>b</sup><sub>3</sub>&nbsp;</td>
      			<td align="center">233.08</td>
      		</tr>
      		<tr>
      			<td align="center">B<sub>3</sub></td>
      			<td align="center">246.94</td>
      		</tr>
      		<tr>
      			<td align="center">C<sub>4</sub></td>
      			<td align="center">261.63</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;C<sup>#</sup><sub>4</sub>/D<sup>b</sup><sub>4</sub>&nbsp;</td>
      			<td align="center">277.18</td>
      		</tr>
      		<tr>
      			<td align="center">D<sub>4</sub></td>
      			<td align="center">293.66</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;D<sup>#</sup><sub>4</sub>/E<sup>b</sup><sub>4</sub>&nbsp;</td>
      			<td align="center">311.13</td>
      		</tr>
      		<tr>
      			<td align="center">E<sub>4</sub></td>
      			<td align="center">329.63</td>
      		</tr>
      		<tr>
      			<td align="center">F<sub>4</sub></td>
      			<td align="center">349.23</td>
      		</tr>
      		<tr>
      			<td align="center">&nbsp;F<sup>#</sup><sub>4</sub>/G<sup>b</sup><sub>4</sub>&nbsp;</td>
      			<td align="center">369.99</td>
      		</tr>
      		<tr>
      			<td align="center">G<sub>4</sub></td>
      			<td align="center">392.00</td>
      		</tr>
      	</tbody>
      </table>
    );
    return (
      <Grid>
        <Grid.Column width={8}>
          <Popup
            trigger={ <Button content="Freq Info" /> }
            content={freqTable}
            on="click"
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position="bottom right"
          />
        </Grid.Column>
        <Grid.Column width={5}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default FreqPopup;
