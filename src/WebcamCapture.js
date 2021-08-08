import { useCallback, useRef } from "react"
import Webcam from "react-webcam"
import { CameraIcon } from "@heroicons/react/solid"
import { useDispatch } from "react-redux"
import { setCameraImage } from "./features/cameraSlice"
import { useHistory } from "react-router-dom"

const videoConstraints = {
    width: 250, 
    height: 400, 
    facingMode: "user", 
}

function WebcamCapture() {
    const webcamRef = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()




    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        dispatch(setCameraImage(imageSrc))
        history.push("/preview")
         
        },[webcamRef])
    
    return (
        <div className="relative">
            <Webcam
            audio={false}
            heigh={videoConstraints.height}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
            />

            <CameraIcon onClick={capture} className="h-8 absolute bottom-0 px-24 text-white   "/>
         


            
        </div>
    )
}

export default WebcamCapture
