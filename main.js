const title = document.getElementById("title")
const icd = document.createElement("h1")
icd.textContent = "Internal Company Directory"
title.appendChild(icd)

const allInfo = document.getElementById("allInfo")

for (var i = 0; i < customers.results.length; i++) {
  let _customers = customers.results[i]

  let main = document.createElement("div")
  let images = document.createElement("img")
  let names = document.createElement("h3")
  let emails = document.createElement("span")
  let addresses = document.createElement("p")
  let addresses1 = document.createElement("p")
  let phones = document.createElement("p")

  images.src = _customers.picture.large
  names.innerHTML = _customers.name.first + " " + _customers.name.last
  emails.innerHTML = _customers.email
  addresses.innerHTML = _customers.location.street
  addresses1.innerHTML =
    _customers.location.city +
    ", " +
    _customers.location.state +
    " " +
    _customers.location.postcode
  phones.innerHTML = _customers.phone

  main.appendChild(images)
  main.appendChild(names)
  main.appendChild(emails)
  main.appendChild(addresses)
  main.appendChild(addresses1)
  main.appendChild(phones)
  allInfo.appendChild(main)
}
