import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { resetCameraImage, selectCameraImage } from "../features/cameraSlice"
import { AiFillCloseCircle } from 'react-icons/ai';



function Preview() {

    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!cameraImage) {
            history.replace("/")
        }
    }, [cameraImage, history])


    const closePreview = () => {
        dispatch(resetCameraImage())
    }


    return (
        <div>
            <AiFillCloseCircle onClick={closePreview} />
            <img src={cameraImage} alt="" />
            
        </div>
    )
}

export default Preview
