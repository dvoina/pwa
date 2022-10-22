async function getMediaStream(constraints = { video: true }) {
    return await navigator.mediaDevices.getUserMedia(constraints)
}

function getImageCapture(mediaStream) {
    const track = mediaStream.getVideoTracks()[0]
    return new ImageCapture(track)
}

export {
    getMediaStream,
    getImageCapture
}