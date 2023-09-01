// Sample data for initial influencers (you can replace this with your own data)
        let influencers = [
            { name: "Influencer 1", socialHandle: "@influencer1", followers: 10000 },
            { name: "Influencer 2", socialHandle: "@influencer2", followers: 5000 },
        ];

        const list = document.getElementById("list");
        const addForm = document.getElementById("addForm");
        const searchInput = document.getElementById("search");

        // Function to display influencers in the list
        function displayInfluencers() {
            list.innerHTML = ""; // Clear the list

            influencers.forEach((influencer, index) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <span>Name: ${influencer.name}</span>
                    <span>Social Handle: ${influencer.socialHandle}</span>
                    <span>Followers: ${influencer.followers}</span>
                    <button onclick="editInfluencer(${index})">Edit</button>
                    <button onclick="deleteInfluencer(${index})">Delete</button>
                `;
                list.appendChild(listItem);
            });
        }

        // Function to add a new influencer
        addForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const socialHandle = document.getElementById("socialHandle").value;
            const followers = document.getElementById("followers").value;

            influencers.push({ name, socialHandle, followers });
            displayInfluencers();
            addForm.reset();
        });

        // Function to edit an existing influencer
        function editInfluencer(index) {
            const editedName = prompt("Edit Name:", influencers[index].name);
            if (editedName !== null) {
                const editedSocialHandle = prompt("Edit Social Handle:", influencers[index].socialHandle);
                const editedFollowers = prompt("Edit Number of Followers:", influencers[index].followers);

                influencers[index] = {
                    name: editedName,
                    socialHandle: editedSocialHandle,
                    followers: parseInt(editedFollowers),
                };

                displayInfluencers();
            }
        }

        // Function to delete an influencer
        function deleteInfluencer(index) {
            const confirmDelete = confirm("Are you sure you want to delete this influencer?");
            if (confirmDelete) {
                influencers.splice(index, 1);
                displayInfluencers();
            }
        }

        // Function to search for influencers
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();

            const filteredInfluencers = influencers.filter((influencer) =>
                influencer.name.toLowerCase().includes(searchTerm) ||
                influencer.socialHandle.toLowerCase().includes(searchTerm)
            );

            displayInfluencers(filteredInfluencers);
        });

        // Initial display
        displayInfluencers();