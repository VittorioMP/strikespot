import React from 'react';
import Slika from './apexunhappy.png';
import Slika1 from './astralismerch.png';
import Slika2 from './transfermezi.png';
import Slika3 from './shakezullah.png';
import Slika4 from './mauisnake.png';
import Slika5 from './gobb.png';
function Novosti() {
  return (
    <div className="Novosti">
        <div class="news">
        <div class="news-content">
            <h2>apEX nezadovoljan odlukom ESL-a</h2>
            <p>Kapetan Vitalityja nije zadovoljan pozivom da igra IEM Dallas na novom ažuriranju s gotovo nimalo vremena za putujuće timove da se pripreme na novom Vertigu.</p>
        </div>
        <img src={Slika} alt="News Image"/>
        
        </div>
        <div class="news">
        <div class="news-content">
            <h2>Astralis predstavlja novu kolekciju robe</h2>
            <p>Pogledajte novu kolekciju robe koju je Astralis predstavio za 2024. godinu.</p>
            <a href="https://twitter.com/i/status/1794277222817394739" target="_blank" rel="noopener noreferrer">Pogledajte video na Twitteru</a>
        </div>
        <img src={Slika1} alt="News Image"/>
        </div>
        <div class="news">
        <div class="news-content">
            <h2>Metizport najavljuje transfer susp-a</h2>
            <p>Metizport je najavio transfer Tima "susp" Ångströma u drugu organizaciju. Iako njegov novi tim još nije objavljen, Morten "zEVES" Vollan, voditelj Esportsa u Metizportu, izjavio je da je "jedna stvar koju sigurno znamo je da je tim koji je primio Tima sretan. Želimo Timu sve najbolje, i sretno u budućnosti."</p>
        </div>
        <img src={Slika2} alt="News Image"/>
        </div>
        <div class="news">
        <div class="news-content">
            <h2>Shakezullah je imenovao FlyQuest RED pomoćnog trenera</h2>
            <p>FlyQuest je objavio da je Alan "⁠Shakezullah⁠" Hardeman imenovan pomoćnim trenerom u njihovom ženskom timu, FlyQuest RED. Bivši igrač Triumpha i Bad News Bearsa radit će pod vodstvom glavnog trenera Luce 'Munstura' Ioanitiua. FlyQuest RED će prisustvovati nadolazećem finalu 5. sezone ESL Impact lige u Dallasu.</p>
        </div>
        <img src={Slika3} alt="News Image"/>
        </div>
        <div class="news">
        <div class="news-content">
            <h2>Mauisnake pokazuje granice novih zapaljivih granata</h2>
            <p>Alex "Mauisnake" Ellenberg obratio se X-u kako bi dao mali pregled toga kako će nervoze na zapaljive granate utjecati na igru, posebice na smanjeno širenje. Određene točke gušenja postalo je nemoguće pokriti jednim zapaljivim sredstvom, poput dna Banane na Infernu.</p>
            <a href="https://twitter.com/i/status/1793769586736972035" target="_blank" rel="noopener noreferrer">Pogledajte video na Twitteru</a>
        </div>
        <img src={Slika4} alt="News Image"/>
        </div>
        <div class="news">
        <div class="news-content">
            <h2>Gob B uklonjen kao BIG-ov trener</h2>
            <p>BIG je objavio da je dugogodišnji član Fatih "gob b" Dayik smijenjen s mjesta glavnog trenera tima uoči IEM Dallasa, gdje će sadašnji pomoćni trener Alexander "kakafu" Szymanczyk preuzeti ulogu. Njemački taktičar prvi put se pridružio BIG-u 2017. kao jedan od osnivača i predstavljao je organizaciju u tri različita razdoblja u Counter-Strikeu, jednom kao igrač i dva kao trener.</p>
        </div>
        <img src={Slika5} alt="News Image"/>
        </div>
    </div>
  );
}

export default Novosti;


