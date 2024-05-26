import './App.css';
import Slika1 from './dachabg.jpg';
import Slika2 from './peraforze.jpg';
import Slika3 from './flyquest1.jpg';
import Slika4 from './buzz.jpg';
import Slika5 from './arrowright.png';
import Slika6 from './entropiq.png';
import Slika7 from './electronic.jpg';
import Slika8 from './virtuspro.png';
import Slika9 from './buster.jpg';
import Slika10 from './onewin.png';
import Slika11 from './s1mple.jpg';
import Slika12 from './navi.png';
import Slika13 from './dupreeh.jpg';
import Slika14 from './falcons.png';

function Body() {
  return (
    <div className="Body">
      <h1 class="najnovijeh1">NAJNOVIJE:</h1>
      <div class="glavnaprikaz">
        <div id="najnovije" class="mini1">
              <h2>NAJAVLJENE GRUPE ZA BETBOOM DACHA BEOGRAD</h2>
              <img src={Slika1} alt="DachaBG"></img>
        </div>
        <div id="najnovije" class="mini2">
              <h2>PERA I FORZE ELIMINIRANI IZ EPL</h2>
              <img src={Slika2} alt="peraforze"></img>
        </div>
        <div id="najnovije" class="mini3">
              <h2>FLYQUEST ULAZI U DOIGRAVANJE PRO LIGE</h2>
              <img src={Slika3} alt="flyquest"></img>
        </div>
      </div>
      <h1 class="transferh1">TOP 5 TRANSFERA U 2024:</h1>
      <div class="velikitransfer">
      
        <div class="transfer1">
          <h2 class="minitransferh2">Buzz prelazi iz Astralis u Entropiq</h2>
          <img src={Slika4}></img><img src={Slika5}></img><img src={Slika6}></img>
        </div>
        <div class="transfer2">
          <h2 class="minitransferh2">Electronic prelazi iz Cloud9 u Virtus.pro</h2>
          <img src={Slika7}></img><img src={Slika5}></img><img src={Slika8}></img>
        </div>
        <div class="transfer3">
          <h2 class="minitransferh2">Electronic prelazi iz Cloud9 u Virtus.pro</h2>
          <img src={Slika9}></img><img src={Slika5}></img><img src={Slika10}></img>
        </div>
        <div class="transfer4">
          <h2 class="minitransferh2">S1mple prelazi iz Falcons u NaVi(na klupi)</h2>
          <img src={Slika11}></img><img src={Slika5}></img><img src={Slika12}></img>
        </div>
        <div class="transfer5">
          <h2 class="minitransferh2">Dupreeh prelazi iz Preasy u Falcons</h2>
          <img src={Slika13}></img><img src={Slika5}></img><img src={Slika14}></img>
        </div>
      </div>
  <div class="glavnaprikaz1">
    <div class="table-container">
      <h1 class="tablica1h1">TRENUTNI POREDAK EKIPA:</h1>
      <table>
        <tr><th>Tim</th><th>Mape</th><th>K-D Razlika</th><th>K/D</th><th>Ocjena 2.0</th></tr>
        <tr><td>Spirit</td><td>23</td><td class="zeleno">+245</td><td>1.16</td><td class="zeleno">1.17</td></tr>
        <tr><td>MIBR</td><td>25</td><td class="zeleno">+226</td><td>1.14</td><td class="zeleno">1.15</td></tr>
        <tr><td>Vitality</td><td>23</td><td class="zeleno">+167</td><td>1.11</td><td class="zeleno">1.14</td></tr>
        <tr><td>FaZe</td><td>53</td><td class="zeleno">+150</td><td>1.04</td><td class="zeleno">1.08</td></tr>
        <tr><td>G2</td><td>41</td><td class="zeleno">+131</td><td>1.05</td><td class="zeleno">1.08</td></tr>
        <tr><td>MOUZ</td><td>26</td><td class="zeleno">+113</td><td>1.06</td><td class="zeleno">1.09</td></tr>
        <tr><td>Virtus.pro</td><td>27</td><td class="zeleno">+61</td><td>1.03</td><td class="zeleno">1.08</td></tr>
        <tr><td>Astralis</td><td>20</td><td class="zeleno">+34</td><td>1.03</td><td class="zeleno">1.07</td></tr>
        <tr><td>FURIA</td><td>25</td><td class="zeleno">+17</td><td>1.01</td><td class="zeleno">1.06</td></tr>
        <tr><td>Natus Vincere</td><td>28</td><td class="zeleno">+5</td><td>1.00</td><td class="zeleno">1.05</td></tr>
        <tr><td>Eternal Fire</td><td>34</td><td>0</td><td>1.00</td><td>1.04</td></tr>
        <tr><td>Monte</td><td>21</td><td class="minus">-11</td><td>0.99</td><td class="zeleno">1.05</td></tr>
        <tr><td>Cloud9</td><td>21</td><td class="minus">-15</td><td>0.99</td><td class="zeleno">1.06</td></tr>
        <tr><td>ECSTATIC</td><td>18</td><td class="minus">-67</td><td>0.95</td><td>1.03</td></tr>
        <tr><td>Falcons</td><td>18</td><td class="minus">-74</td><td>0.94</td><td>1.01</td></tr>
        <tr><td>HEROIC</td><td>36</td><td class="minus">-77</td><td>0.97</td><td>1.03</td></tr>
        <tr><td>Complexity</td><td>18</td><td class="minus">-107</td><td>0.92</td><td>1.01</td></tr>
        <tr><td>paiN</td><td>45</td><td class="minus">-120</td><td>0.96</td><td>1.02</td></tr>
        <tr><td>SAW</td><td>21</td><td class="minus">-184</td><td>0.88</td><td>0.96</td></tr>
        <tr><td>Imperial</td><td>48</td><td class="minus">-212</td><td>0.94</td><td>1.00</td></tr>
        <tr><td>GamerLegion</td><td>25</td><td class="minus">-231</td><td>0.88</td><td>0.96</td></tr>
        <tr><td>ENCE</td><td>22</td><td class="minus">-254</td><td>0.85</td><td class="minus">0.93</td></tr>
      </table>
      </div>
      <div class="table-container1">
        <h1 class="tablica2h1">POREDAK IGRAČA U POSLJEDNJIH MJESEC DANA:</h1>
      <table>
        <tr><th>Igrač</th><th>Tim</th><th>Mape</th><th>Runde</th><th>K-D Razlika</th><th>K/D</th><th>Rating 2.0</th></tr>
        <tr><td>m0NESY</td><td>G2</td><td>15</td><td>322</td><td class="zeleno">+85</td><td>1.46</td><td class="zeleno">1.29</td></tr>
        <tr><td>broky</td><td>FaZe</td><td>21</td><td>452</td><td class="zeleno">+91</td><td>1.34</td><td class="zeleno">1.22</td></tr>
        <tr><td>NAF</td><td>Team Liquid</td><td>14</td><td>312</td><td class="zeleno">+23</td><td>1.12</td><td class="zeleno">1.19</td></tr>
        <tr><td>Twistzz</td><td>Team liquid</td><td>14</td><td>546</td><td class="zeleno">+33</td><td>1.17</td><td class="zeleno">1.19</td></tr>
        <tr><td>exit</td><td>MIBR</td><td>25</td><td>546</td><td class="zeleno">+53</td><td>1.17</td><td class="zeleno">1.17</td></tr>
        <tr><td>drop</td><td>MIBR</td><td>25</td><td>546</td><td class="zeleno">+50</td><td>1.15</td><td class="zeleno">1.17</td></tr>
        <tr><td>saffee</td><td>MIBR</td><td>25</td><td>546</td><td class="zeleno">+74</td><td>1.25</td><td class="zeleno">1.16</td></tr>
        <tr><td>insani</td><td>MIBR</td><td>25</td><td>546</td><td class="zeleno">+51</td><td>1.14</td><td class="zeleno">1.16</td></tr>
        <tr><td>lux</td><td>paiN</td><td>29</td><td>639</td><td class="zeleno">+27</td><td>1.06</td><td class="zeleno">1.14</td></tr>
        <tr><td>frozen</td><td>FaZe</td><td>21</td><td>452</td><td class="zeleno">+49</td><td>1.18</td><td class="zeleno">1.14</td></tr>
        <tr><td>NiKo</td><td>G2</td><td>15</td><td>322</td><td class="zeleno">+12</td><td>1.06</td><td class="zeleno">1.11</td></tr>
        <tr><td>brzn4n</td><td>MIBR</td><td>25</td><td>546</td><td class="minus">-2</td><td>0.99</td><td class="zeleno">1.09</td></tr>
        <tr><td>nqz</td><td>paiN</td><td>29</td><td>639</td><td class="zeleno">+52</td><td>1.13</td><td class="zeleno">1.08</td></tr>
        <tr><td>rain</td><td>FaZe</td><td>21</td><td>452</td><td class="minus">-17</td><td>0.95</td><td class="zeleno">1.08</td></tr>
        <tr><td>ropz</td><td>FaZe</td><td>21</td><td>452</td><td class="zeleno">+22</td><td>1.08</td><td class="zeleno">1.08</td></tr>
        <tr><td>biguzera</td><td>paiN</td><td>29</td><td>639</td><td class="minus">-35</td><td>0.92</td><td class="zeleno">1.06</td></tr>
        <tr><td>felps</td><td>Imperial</td><td>29</td><td>606</td><td class="minus">-13</td><td>0.97</td><td class="zeleno">1.05</td></tr>
        <tr><td>noway</td><td>Imperial</td><td>29</td><td>606</td><td class="minus">-35</td><td>0.92</td><td>1.02</td></tr>
        <tr><td>YEKINDAR</td><td>Team Liquid</td><td>14</td><td>312</td><td class="minus">-28</td><td>0.87</td><td>0.99</td></tr>
        <tr><td>huNter-</td><td>G2</td><td>15</td><td>322</td><td class="minus">-24</td><td>0.89</td><td>0.99</td></tr>
        <tr><td>cadiaN</td><td>Team Liquid</td><td>14</td><td>312</td><td class="minus">-9</td><td>0.95</td><td>0.97</td></tr>
        <tr><td>nexa</td><td>G2</td><td>15</td><td>322</td><td class="minus">-9</td><td>0.96</td><td class="minus">0.95</td></tr>
      </table>
      </div>
      </div>
    </div>
  );
}

export default Body;
