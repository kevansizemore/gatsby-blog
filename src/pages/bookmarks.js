import React from "react"
import {Helmet} from "react-helmet";
import { graphql } from "gatsby"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Bookmarks = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const authorName = data.site.siteMetadata.author.name

  return (
    <Layout location={location} title={siteTitle} author={authorName}>
      <Helmet>
        <meta name="robots" content="noindex">
      </Helmet>
      <SEO title="Bookmarks" />
      <NavMenu />
      <Bio />
      <h2 id="top">Bookmarks</h2>
      <p>Select a category:</p>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#financialServices">Financial Services</a></li>
        <li><a href="#firearms">Firearms</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#games">Games</a></li>
        <li><a href="#learn">Learn</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#radioControl">Radio Control</a></li>
        <li><a href="#security">Security</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#shopping">Shopping</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#spiritual">Spiritual</a></li>
        <li><a href="#utilities">Utilities</a></li>
      </ul>
      <br />
      <br />
      <hr />
      <h3 id="blogs">Blogs</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://brettterpstra.com/" target="_blank" rel="noopener noreferrer">Brett Terpstra</a></li>
        <li><a href="https://www.macsparky.com/" target="_blank" rel="noopener noreferrer">David Sparks</a></li>
        <li><a href="https://www.speirs.org/" target="_blank" rel="noopener noreferrer">Fraser Speirs</a></li>
        <li><a href="https://daringfireball.net/" target="_blank" rel="noopener noreferrer">John Gruber</a></li>
        <li><a href="https://lifehacker.com/" target="_blank" rel="noopener noreferrer">Lifehacker</a></li>
        <li><a href="https://makezine.com/" target="_blank" rel="noopener noreferrer">Make:</a></li>
        <li><a href="https://osxdaily.com/" target="_blank" rel="noopener noreferrer">OS X Daily</a></li>
        <li><a href="https://phdcomics.com/comics.php" target="_blank" rel="noopener noreferrer">PHD Comics</a></li>
        <li><a href="https://sethgodin.typepad.com/" target="_blank" rel="noopener noreferrer">Seth Godin</a></li>
        <li><a href="https://theoatmeal.com/" target="_blank" rel="noopener noreferrer">The Oatmeal</a></li>
        <li><a href="https://www.thesimpledollar.com/" target="_blank" rel="noopener noreferrer">The Simple Dollar</a></li>
        <li><a href="https://unclutterer.com/" target="_blank" rel="noopener noreferrer">Unclutterer</a></li>
        <li><a href="https://xkcd.com/" target="_blank" rel="noopener noreferrer">xkcd</a></li>
        <li><a href="https://zenhabits.net/" target="_blank" rel="noopener noreferrer">zenhabits</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="development">Development</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://color.adobe.com/" target="_blank" rel="noopener noreferrer">Adobe Color</a></li>
        <li><a href="https://developer.android.com/" target="_blank" rel="noopener noreferrer">Android Developers</a></li>
        <li><a href="https://developer.apple.com/" target="_blank" rel="noopener noreferrer">Apple Developer</a></li>
        <li><a href="https://bitbucket.org/" target="_blank" rel="noopener noreferrer">BitBucket</a></li>
        <li><a href="https://channel9.msdn.com/" target="_blank" rel="noopener noreferrer">Channel 9 - MSDN Videos</a></li>
        <li><a href="https://creativecommons.org/" target="_blank" rel="noopener noreferrer">Creative Commons</a></li>
        <li><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS-Tricks</a></li>
        <li><a href="https://www.designpanoply.com/" target="_blank" rel="noopener noreferrer">Design Panoply</a></li>
        <li><a href="https://www.envato.com/" target="_blank" rel="noopener noreferrer">Envato</a></li>
        <li><a href="https://www.git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></li>
        <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a></li>
        <li><a href="https://developers.google.com/" target="_blank" rel="noopener noreferrer">Google Developers</a></li>
        <li><a href="https://microjs.com/" target="_blank" rel="noopener noreferrer">microjs Frameworks and Libraries</a></li>
        <li><a href="https://www.microsoft.com/design/" target="_blank" rel="noopener noreferrer">Microsoft Design</a></li>
        <li><a href="https://docs.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft Docs</a></li>
        <li><a href="https://docs.oracle.com/" target="_blank" rel="noopener noreferrer">Oracle Documentation</a></li>
        <li><a href="https://www.visual-literacy.org/periodic_table/periodic_table.html" target="_blank" rel="noopener noreferrer">Python Programming Language</a></li>
        <li><a href="https://incompetech.com/music/royalty-free/" target="_blank" rel="noopener noreferrer">Royalty Free Music</a></li>
        <li><a href="https://www.thebestdesigns.com/" target="_blank" rel="noopener noreferrer">The Best Designs</a></li>
        <li><a href="https://www.articulate.com/rapid-elearning/" target="_blank" rel="noopener noreferrer">The Rapid eLearning Blog</a></li>
        <li><a href="https://developer.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu App Developer</a></li>
        <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
        <li><a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">WebPageTest</a></li>
        <li><a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">World Wide Web Consortium (W3C)</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="financialServices">Financial Services</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.ally.com/" target="_blank" rel="noopener noreferrer">Ally Bank</a></li>
        <li><a href="https://www.synchronycredit.com/eSecurity/Login/login.action?clientId=amazon&amp;accountType=plcc&amp;langId=en" target="_blank" rel="noopener noreferrer">Amazon.com Credit</a></li>
        <li><a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer">American Express</a></li>
        <li><a href="https://www.bankofamerica.com/" target="_blank" rel="noopener noreferrer">Bank of America</a></li>
        <li><a href="https://www.barclaycardus.com/" target="_blank" rel="noopener noreferrer">Barclaycard</a></li>
        <li><a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">Capital One</a></li>
        <li><a href="https://www.chase.com/" target="_blank" rel="noopener noreferrer">CHASE Bank</a></li>
        <li><a href="https://online.citibank.com/" target="_blank" rel="noopener noreferrer">Citibank</a></li>
        <li><a href="https://www.discover.com/" target="_blank" rel="noopener noreferrer">Discover</a></li>
        <li><a href="https://401k.fidelity.com/" target="_blank" rel="noopener noreferrer">Fidelity Investments</a></li>
        <li><a href="https://citiretailservices.citibankonline.com/RSnextgen/svc/launch/index.action?siteId=PLCN_HOMEDEPOT&amp;langId=en_US#signon" target="_blank" rel="noopener noreferrer">Home Depot Credit</a></li>
        <li><a href="https://www.libertymutual.com/" target="_blank" rel="noopener noreferrer">Liberty Mutual</a></li>
        <li><a href="https://www.nelnet.com/" target="_blank" rel="noopener noreferrer">Nelnet</a></li>
        <li><a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">PayPal</a></li>
        <li><a href="https://www.mysynchrony.com/" target="_blank" rel="noopener noreferrer">Synchrony Bank</a></li>
        <li><a href="https://www.wealthfront.com/" target="_blank" rel="noopener noreferrer">Wealthfront</a></li>
        <li><a href="https://www.wellsfargo.com/" target="_blank" rel="noopener noreferrer">Wells Fargo</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="firearms">Firearms</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.americanrifleman.org/" target="_blank" rel="noopener noreferrer">American Rifleman</a></li>
        <li><a href="https://gunowners.org/" target="_blank" rel="noopener noreferrer">Gun Owners of America</a></li>
        <li><a href="https://www.midwayusa.com/" target="_blank" rel="noopener noreferrer">Midway USA</a></li>
        <li><a href="https://nra.org/" target="_blank" rel="noopener noreferrer">National Rifle Association</a></li>
        <li><a href="https://www.ncrr.net/" target="_blank" rel="noopener noreferrer">Norfolk County Rifle Range</a></li>
        <li><a href="https://www.pyramydair.com/" target="_blank" rel="noopener noreferrer">Pyramid Air Gun Mall</a></li>
        <li><a href="https://www.shootingillustrated.com/" target="_blank" rel="noopener noreferrer">Shooting Illustrated</a></li>
        <li><a href="https://www.vcdl.org/" target="_blank" rel="noopener noreferrer">Virginia Citizens Defense League</a></li>
        <li><a href="https://www.myvssa.org/" target="_blank" rel="noopener noreferrer">Virginia Shooting Sports Association</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="food">Food</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://allrecipes.com/" target="_blank" rel="noopener noreferrer">Allrecipes</a></li>
        <li><a href="https://www.americastestkitchen.com/" target="_blank" rel="noopener noreferrer">America’s Test Kitchen</a></li>
        <li><a href="https://www.chefsteps.com/" target="_blank" rel="noopener noreferrer">ChefSteps</a></li>
        <li><a href="https://www.cooksillustrated.com/" target="_blank" rel="noopener noreferrer">Cook's Illustrated</a></li>
        <li><a href="https://www.dominos.com/" target="_blank" rel="noopener noreferrer">Domino's Pizza</a></li>
        <li><a href="https://www.epicurious.com/" target="_blank" rel="noopener noreferrer">Epicurious</a></li>
        <li><a href="https://www.finecooking.com/" target="_blank" rel="noopener noreferrer">Fine Cooking</a></li>
        <li><a href="https://www.opentable.com/" target="_blank" rel="noopener noreferrer">OpenTable</a></li>
        <li><a href="https://www.papajohns.com/" target="_blank" rel="noopener noreferrer">Papa John’s Pizza</a></li>
        <li><a href="https://www.starbucks.com/" target="_blank" rel="noopener noreferrer">Starbucks Coffee Company</a></li>
        <li><a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer">Yelp</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="games">Games</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://bethesda.net/" target="_blank" rel="noopener noreferrer">Bethesda</a></li>
        <li><a href="https://www.bioware.com/" target="_blank" rel="noopener noreferrer">BioWare</a></li>
        <li><a href="https://www.blizzard.com/" target="_blank" rel="noopener noreferrer">Blizzard</a></li>
        <li><a href="https://www.ea.com/" target="_blank" rel="noopener noreferrer">Electronic Arts</a></li>
        <li><a href="https://www.firaxis.com/" target="_blank" rel="noopener noreferrer">Firaxis</a></li>
        <li><a href="https://elderscrolls.wikia.com/wiki/The_Elder_Scrolls_Wiki/Portal/Skyrim" target="_blank" rel="noopener noreferrer">Skyrim Wiki</a></li>
        <li><a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">Steam</a></li>
        <li><a href="https://www.valvesoftware.com/" target="_blank" rel="noopener noreferrer">Valve</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="learn">Learn</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.adorama.com/alc/category/AdoramaTV" target="_blank" rel="noopener noreferrer">Adorama TV</a></li>
        <li><a href="https://analyticsacademy.withgoogle.com/explorer" target="_blank" rel="noopener noreferrer">Analytics Academy</a></li>
        <li><a href="https://www.bettermoneyhabits.com/" target="_blank" rel="noopener noreferrer">Better Money Habits</a></li>
        <li><a href="https://www.bignerdranch.com/" target="_blank" rel="noopener noreferrer">Big Nerd Ranch</a></li>
        <li><a href="https://www.usa.canon.com/dlc/" target="_blank" rel="noopener noreferrer">Canon Digital Learning Center</a></li>
        <li><a href="https://www.code.org/" target="_blank" rel="noopener noreferrer">Code.org</a></li>
        <li><a href="https://www.comptia.org/" target="_blank" rel="noopener noreferrer">CompTIA</a></li>
        <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">Coursera</a></li>
        <li><a href="https://www.creativelive.com/" target="_blank" rel="noopener noreferrer">creativeLIVE</a></li>
        <li><a href="https://www.devry.edu/" target="_blank" rel="noopener noreferrer">DeVry University</a></li>
        <li><a href="https://www.trs-80.com/" target="_blank" rel="noopener noreferrer">Ira Goldklang's TRS-80 Revived Site</a></li>
        <li><a href="https://www.iste.org/" target="_blank" rel="noopener noreferrer">ISTE</a></li>
        <li><a href="https://kelbyone.com/" target="_blank" rel="noopener noreferrer">KelbyTraining.com</a></li>
        <li><a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">Khan Academy</a></li>
        <li><a href="https://www.knewton.com/" target="_blank" rel="noopener noreferrer">Knewton</a></li>
        <li><a href="https://learn.media.mit.edu/" target="_blank" rel="noopener noreferrer">Learning Creative Learning</a></li>
        <li><a href="https://www.microsoft.com/learning/en-us/default.aspx" target="_blank" rel="noopener noreferrer">Microsoft Learning</a></li>
        <li><a href="https://www.microsoftvirtualacademy.com/ebooks" target="_blank" rel="noopener noreferrer">Microsoft Press FREE eBooks</a></li>
        <li><a href="https://webmaker.org/" target="_blank" rel="noopener noreferrer">Mozilla Webmaker</a></li>
        <li><a href="https://www.prometric.com/" target="_blank" rel="noopener noreferrer">ProMetric</a></li>
        <li><a href="https://www.smartsparrow.com/" target="_blank" rel="noopener noreferrer">Smart Sparrow</a></li>
        <li><a href="https://www.ted.com/" target="_blank" rel="noopener noreferrer">TED - Ideas Worth Spreading</a></li>
        <li><a href="https://www.capetowndeclaration.org/" target="_blank" rel="noopener noreferrer">The Cape Town Open Education Declaration</a></li>
        <li><a href="https://www.elearningguild.com/" target="_blank" rel="noopener noreferrer">The eLearning Guild</a></li>
        <li><a href="https://www.grammaruntied.com/blog/" target="_blank" rel="noopener noreferrer">The Tongue Untied</a></li>
        <li><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="products">Products</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://agilebits.com/" target="_blank" rel="noopener noreferrer">AgileBits</a></li>
        <li><a href="https://www.barebones.com/index.html" target="_blank" rel="noopener noreferrer">Bare Bones Software</a></li>
        <li><a href="https://www.busymac.com/" target="_blank" rel="noopener noreferrer">BusyCal</a></li>
        <li><a href="https://chronicleapp.com/" target="_blank" rel="noopener noreferrer">Chronicle</a></li>
        <li><a href="https://switchblade.helgesverre.com/index.html" target="_blank" rel="noopener noreferrer">Helge's Switchblade</a></li>
        <li><a href="https://literatureandlatte.com/" target="_blank" rel="noopener noreferrer">Literature and Latte</a></li>
        <li><a href="https://www.noodlesoft.com/" target="_blank" rel="noopener noreferrer">Noodlesoft - Hazel</a></li>
        <li><a href="https://www.obdev.at/" target="_blank" rel="noopener noreferrer">Objective Development</a></li>
        <li><a href="https://www.omnigroup.com/" target="_blank" rel="noopener noreferrer">Omni Group</a></li>
        <li><a href="https://www.parallels.com/" target="_blank" rel="noopener noreferrer">Parallels</a></li>
        <li><a href="https://www.cocoatech.com/" target="_blank" rel="noopener noreferrer">Path Finder</a></li>
        <li><a href="https://www.smilesoftware.com/" target="_blank" rel="noopener noreferrer">Smile Software</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="radioControl">Radio Control</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.modelaircraft.org/" target="_blank" rel="noopener noreferrer">Academy of Model Aeronautics</a></li>
        <li><a href="https://www.atomikrc.com/" target="_blank" rel="noopener noreferrer">Atomik RC</a></li>
        <li><a href="https://www.bigsquidrc.com/" target="_blank" rel="noopener noreferrer">Big Squid RC</a></li>
        <li><a href="https://home.castlecreations.com/" target="_blank" rel="noopener noreferrer">Castle Creations</a></li>
        <li><a href="https://commonsenserc.com/" target="_blank" rel="noopener noreferrer">Common Sense RC</a></li>
        <li><a href="https://flitetest.com/" target="_blank" rel="noopener noreferrer">FliteTest</a></li>
        <li><a href="https://www.helidirect.com/" target="_blank" rel="noopener noreferrer">HeliDirect</a></li>
        <li><a href="https://www.helifreak.com/" target="_blank" rel="noopener noreferrer">Helifreak</a></li>
        <li><a href="https://www.hobbyking.com/" target="_blank" rel="noopener noreferrer">Hobby King</a></li>
        <li><a href="https://www.horizonhobby.com/" target="_blank" rel="noopener noreferrer">Horizon Hobby</a></li>
        <li><a href="https://www.lynxheli.com/" target="_blank" rel="noopener noreferrer">Lynx Heli Innovations</a></li>
        <li><a href="https://miponline.com/" target="_blank" rel="noopener noreferrer">MIP RC Performance Parts and Tools</a></li>
        <li><a href="https://www.newportnewsrc.org/" target="_blank" rel="noopener noreferrer">Neport News Park RC Club</a></li>
        <li><a href="https://www.rakonheli.com/" target="_blank" rel="noopener noreferrer">Rakon Heli</a></li>
        <li><a href="https://www.rcgroups.com/" target="_blank" rel="noopener noreferrer">RC Groups</a></li>
        <li><a href="https://www.rchelicopterfun.com/" target="_blank" rel="noopener noreferrer">RC Helicopter Fun</a></li>
        <li><a href="https://www.rcuniverse.com/" target="_blank" rel="noopener noreferrer">RC Universe</a></li>
        <li><a href="https://rpmrcproducts.com/" target="_blank" rel="noopener noreferrer">RPM RC Products</a></li>
        <li><a href="https://spektrumrc.com/" target="_blank" rel="noopener noreferrer">Spektrum RC Technology</a></li>
        <li><a href="https://www.towerhobbies.com/" target="_blank" rel="noopener noreferrer">Tower Hobbies</a></li>
        <li><a href="https://traxxas.com/" target="_blank" rel="noopener noreferrer">Traxxas</a></li>
        <li><a href="https://www.venompower.com/" target="_blank" rel="noopener noreferrer">Venom Power</a></li>
        <li><a href="https://www.wattflyer.com/forums/" target="_blank" rel="noopener noreferrer">WattFlyer</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="security">Security</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.isc2.org/" target="_blank" rel="noopener noreferrer">(ISC)²</a></li>
        <li><a href="https://www.backtrack-linux.org/" target="_blank" rel="noopener noreferrer">BackTrack Penetration Testing</a></li>
        <li><a href="https://www.comodo.com/" target="_blank" rel="noopener noreferrer">Comodo</a></li>
        <li><a href="https://www.eccouncil.org/" target="_blank" rel="noopener noreferrer">EC Council</a></li>
        <li><a href="https://www.google.com/safetycenter/" target="_blank" rel="noopener noreferrer">Google Safety Center</a></li>
        <li><a href="https://insecure.org/" target="_blank" rel="noopener noreferrer">Insecure.Org</a></li>
        <li><a href="https://www.mcafee.com/us/mcafee-labs.aspx" target="_blank" rel="noopener noreferrer">McAfee Labs</a></li>
        <li><a href="https://technet.microsoft.com/en-us/security" target="_blank" rel="noopener noreferrer">Microsoft Security Center</a></li>
        <li><a href="https://staysafeonline.org/" target="_blank" rel="noopener noreferrer">National Cyber Security Alliance</a></li>
        <li><a href="https://us.norton.com/security-center/" target="_blank" rel="noopener noreferrer">Norton Security Center</a></li>
        <li><a href="https://computer-forensics.sans.org/" target="_blank" rel="noopener noreferrer">SANS Computer Forensics</a></li>
        <li><a href="https://sectools.org/" target="_blank" rel="noopener noreferrer">SecTools.Org</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="services">Services</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.audible.com/" target="_blank" rel="noopener noreferrer">Audible</a></li>
        <li><a href="https://www.dropbox.com/" target="_blank" rel="noopener noreferrer">Dropbox</a></li>
        <li><a href="https://evernote.com/" target="_blank" rel="noopener noreferrer">Evernote</a></li>
        <li><a href="https://www.grc.com/" target="_blank" rel="noopener noreferrer">Gibson Research Corporation</a></li>
        <li><a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">Google Drive</a></li>
        <li><a href="https://www.icloud.com/" target="_blank" rel="noopener noreferrer">iCloud</a></li>
        <li><a href="https://ninite.com/" target="_blank" rel="noopener noreferrer">Ninite</a></li>
        <li><a href="https://onedrive.live.com/" target="_blank" rel="noopener noreferrer">OneDrive</a></li>
        <li><a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer">SquareSpace</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="shopping">Shopping</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a></li>
        <li><a href="https://www.ebay.com/" target="_blank" rel="noopener noreferrer">eBay</a></li>
        <li><a href="https://www.newegg.com/" target="_blank" rel="noopener noreferrer">Newegg</a></li>
        <li><a href="https://stacksocial.com/" target="_blank" rel="noopener noreferrer">StackSocial</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="social">Social</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://talk.macpowerusers.com/" target="_blank" rel="noopener noreferrer">Mac Power Users Talk</a></li> 
        <li><a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
        <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="spiritual">Spiritual</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.thelatinlibrary.com/imperialism/notes/middleageschron.html" target="_blank" rel="noopener noreferrer">A Chronology of the Middle Ages</a></li>
        <li><a href="https://www.atla.com/" target="_blank" rel="noopener noreferrer">American Theological Library Association</a></li>
        <li><a href="https://www.bible.com/" target="_blank" rel="noopener noreferrer">Bible.com</a></li>
        <li><a href="https://www.biblegateway.com/" target="_blank" rel="noopener noreferrer">BibleGateway.com</a></li>
        <li><a href="https://www.biblia.com/" target="_blank" rel="noopener noreferrer">Biblia.com</a></li>
        <li><a href="https://www.fh.org/" target="_blank" rel="noopener noreferrer">Food for the Hungry</a></li>
        <li><a href="https://www.reasonablefaith.org/" target="_blank" rel="noopener noreferrer">Reasonable Faith</a></li>
        <li><a href="https://www.rightnow.org/" target="_blank" rel="noopener noreferrer">RightNow Media</a></li>
        <li><a href="https://www.goarch.org/ourfaith/ourfaith8062" target="_blank" rel="noopener noreferrer">The Ecumenical Councils</a></li>
        <li><a href="https://www.theopedia.com/" target="_blank" rel="noopener noreferrer">Theopedia</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <hr />
      <h3 id="utilities">Utilities</h3>
      <ul style={{ marginLeft: 48 }}>
        <li><a href="https://www.spectrum.net/" target="_blank" rel="noopener noreferrer">Charter Spectrum Communications</a></li>
        <li><a href="https://www.columbiagasva.com/" target="_blank" rel="noopener noreferrer">Columbia Gas of Virginia</a></li>
        <li><a href="https://www.dom.com/" target="_blank" rel="noopener noreferrer">Dominion Energy</a></li>
        <li><a href="https://www.hrsd.com/" target="_blank" rel="noopener noreferrer">HRUBS / Hampton Roads Sanitation District</a></li>
        <li><a href="https://www.verizonwireless.com/" target="_blank" rel="noopener noreferrer">Verizon Wireless</a></li>
      </ul>
      <a href="#top">Return to categories list.</a>
      <br />
      <br />
      <footer>
        <p><small>Last validated: March 18, 2020</small></p>
      </footer>
    </Layout>
  )
}
export default Bookmarks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author{
          name
        }
      }
    }
  }
`
