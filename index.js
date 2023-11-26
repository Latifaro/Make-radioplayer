async function fetchData() {
    try {
        const response = await fetch('https://api.sr.se/api/v2/channels/?format=json&size=10');
        const data = await response.json();

        const channelsContainer = document.getElementById('channels');

        data.channels.forEach(channel => {
            const channelInfo = `
                <div class="channel-container">
                    <h2>${channel.name}</h2>
                    <p>${channel.tagline}</p>
                    <img src="${channel.image}" alt="${channel.name}" />
                    <audio controls>
                        <source src="${channel.liveaudio.url}" type="audio/mpeg">
                        <source src="${channel.liveaudio.url}" type="audio/ogg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            `;
            channelsContainer.innerHTML += channelInfo;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function
fetchData();
