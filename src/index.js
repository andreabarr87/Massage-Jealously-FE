//VARIABLES//
// //login (sidebar not present)
// const loginContainer = document.getElementById('*****')
// const guestLoginBtn = document.getElementById('*****')
// const providerLoginBtn = document.getElementById('******')
//main (sidebar present but not incl here; visible to guest and provider)
const mainContainer = document.getElementById('*******')
// //sidebar (main present but not incl here)
const specialtySidebar = document.getElementById('*******')
// //provider main (top container within main)
const providerMainContainer = document.getElementById('*****')
//provider inner: bio, img, specialties (top container)
const providerImgContainer = document.getElementById('*****')
const providerBioContainer = document.getElementById('*****')
const providerSpecialtiesContainer = document.getElementById('*****')
//provider details edit + add btns (top container)
let editProviderDetailBtn = document.getElementById('*****')
let addProviderDetailBtn = document.getElementById('*****')
//services main (bottom container within main; contains cards)
let serviceCard = document.getElementById('*****')
const serviceCardsContainer = document.getElementById('*******')
//card edit + add btns
let addServiceBtn = document.getElementById('*****')
let editServiceBtn = document.getElementById('*******')
//provider default
let providerID = 0


//FUNCTIONS//
const getProvidersNames = () => {
	//fetch all provider data
	fetch('providers url***')
		.then(resp => resp.json)
		.then(providersData => renderProvidersNames(providersData))
}

const renderProvidersNames = (providersData) => {
	providersData.forEach(provider => renderProviderNames(provider))
}

const renderProviderNames = () => {

}
	 
const renderLogin = () => {
	const loginContainer = document.getElementById('*****')
	const guestLoginBtn = document.getElementById('*****')
	const providerLoginBtn = document.getElementById('******')
	//fetch all provider names to select from
	//'confirm'/log in button
}
//both buttons from renderLogin will call renderWelcome 
//log in 'confirmation' button will re-set providerID (default 0) to id corresponding to provider chosen
const renderWelcome = () => {
	//display welcome message (create elements?)
	// mainContainer.append(elements created above?)
	getSpecialties(specialties)
}

const getSpecialties = () => {
	//fetch all specialties via providers, render in sidebar via li(?) element creation
	fetch('****url')
		.then(resp => resp.json())
		.then(specialtiesData => renderSpecialties(specialtiesData))
}

	
const renderSpecialties = (specialtiesData) => { 
	//don't work on this too much yet-- sidebar functionality tbd**** //
	specialtiesData.forEach(specialty => renderSpecialty(specialty))
	//with sub-menu of providers?
}

const renderSpecialty = (specialty) => {
	//const listItem = document.createElement('p'?)
	//specialtySidebar.append('p'?)
}

const getProvidersBySpecialty = () => {
	//don't work on this too much yet -- sub-menu for sidebar**** //
	fetch('providersurl*****')
		.then(resp => resp.json)
		.then(providersData => renderProvidersBySpecialty(providersData))
}

const renderProvidersBySpecialty = (providersData) => {
	providersData.forEach(provider => {
		renderProviderBySpecialty(provider)
	})	
}

const renderProviderBySpecialty = (providerData) => {
	//providersdata.map and create li(?) for every provider (name) who lists this as one of their specialties
	//attach edit button, assign it id according to provider
}

const getProviderDetails
	//fetch a single provider 
	//e.g., to show in provider inner div
const renderProviderDetails
	//renders single providers info
	//if providerID = provider.id, add/edit-ProviderDetailBtn display:block, else display:none
const editProviderDetails
	//edit sections of inner provider div
	//patch
const getServices = () => {
	//fetch all
}
const renderServiceCard = (providerID) => {
	//prevent default
	//if provider_id stored on a service matches the id of provider on display (i.e., selected on click event from sidebar)
	//create div and create cards?
	//render service cards assoc with provider
	//create edit/save, conditionally rendered based upon 'admin'
}
const renderServiceCards = () => {

}
const renderAddNewCardForm
	//add new button
	//render new card form (separate fn?)
	//save new button
const addServiceCard
	//post 
const editServiceCard
	//patch



//EVENT HANDLERS//
//login handler- handler on login confirmation or guest confirmation (point to renderWelcome, which points to fetch of of providers referenced below)
//specialty (sidebar) handler (point to fetch fn to get providers)
//provider (sidebar submenu) handler (point to fetch fn for single provider AND point to another fetch fn for services)
//edit provider info handler (points to fetch-get fn on provider)
//save provider info handler (points to fetch-patch fn on provider)
//edit card handler (points to fetch-get fn on services)
//save card handler (points to fetch-patch fn on services)
//add new card form handler (points to renderAddNewCardForm)
//save new card(points to fetch-post fn on services)


//EVENT LISTENERS//
//login buttons click listener (guest AND provider)
guestLoginBtn.addEventListener('click')
//sidebar click listener (specialties), login handler
//sidebar submenu click listener (providers by specialty), render relevant provider info in top div + relevant services offered in bottom div
//listen on edit + save button clicks on top div (provider info)
//listen on edit + save button clicks on *each card* in bottom div (services)
//listen on add + save button clicks on add new card form


//INVOKED FNs//
//renderLogin (fetches provider names for login)



























// const appndBtn = document.querySelector(".ui")
// const bar = document.querySelector(".pointing")
// const cardCont = document.querySelector(".three")
// const friendPage = document.getElementById("friends")




// const appendAcc = () => {
// 	const appendString = `
// 		<div class="ui styled fluid accordion">
// 			<div class="title active">
// 				<i class="dropdown icon"></i>
// 				What is a dog?
// 			</div>
// 			<div class="content active">
// 				<p class="transition visible" style="display: block !important;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
// 			</div>
// 			<div class="title">
// 				<i class="dropdown icon"></i>
// 				What kinds of dogs are there?
// 			</div>
// 			<div class="content">
// 				<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
// 			</div>
// 			<div class="title">
// 				<i class="dropdown icon"></i>
// 				How do you acquire a dog?
// 			</div>
// 			<div class="content">
// 				<p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
// 				<p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
// 			</div>
// 		</div>
// 	`
// 	document.body.innerHTML = appendString
// }

// const accHandler = () => {
// 	let clicked = event.target
// 	if (clicked.className.includes("title")) {
// 		if (clicked.className.includes("active")) {
// 			clicked.nextElementSibling.className = "content"
// 			clicked.className = "title"
// 		} else {
// 			clicked.nextElementSibling.className = "content active"
// 			clicked.className = "title active"
// 		}
// 	}
// }

// const renderCard = () => {
// 	const appendString = `
// 	<div class="ui card">
// 	<div class="content">
// 	  <div class="right floated meta">14h</div>
// 	  <img class="ui avatar image" src="https://cdn.spafinder.com/2015/08/swedish-massage.jpg"> Elliot
// 	</div>
// 	<div class="image">
// 	  <img src="https://cdn.spafinder.com/2015/08/swedish-massage.jpg">
// 	</div>
// 	<div class="content">
// 	  <span class="right floated">
// 		<i class="heart outline like icon"></i>
// 		17 likes
// 	  </span>
// 	  <i class="comment icon"></i>
// 	  3 comments
// 	</div>
// 	<div class="extra content">
// 	  <div class="ui large transparent left icon input">
// 		<i class="heart outline icon"></i>
// 		<input type="text" placeholder="Add Comment...">
// 	  </div>
// 	</div>
//   </div>
// 	`
// 	document.body.innerHTML = appendString
	
// }

// const navBar = () => {
// 	if (event.target.innerText === "Friends"){
// 		bar.children[0].className = "item"
// 		bar.children[1].className = "item"
// 		bar.children[2].className = "item active"
// 		cardCont.style.display = "none"
// 		friendPage.style.display = "block"

// 	}
// 	if (event.target.innerText === "Messages"){
// 		bar.children[0].className = "item"
// 		bar.children[1].className = "item active"
// 		bar.children[2].className = "item"

// 	}
// 	if (event.target.innerText === "Home"){
// 		bar.children[0].className = "item active"
// 		bar.children[1].className = "item"
// 		bar.children[2].className = "item"
// 		cardCont.style.display = "block"
// 		friendPage.style.display = "none"
// 	}
// }

// // appndBtn.addEventListener("click", renderCard)
// // document.body.addEventListener("click", accHandler)
// bar.addEventListener("click", navBar)