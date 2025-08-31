import { v2 as cloudinary } from 'cloudinary';
import eventArtistModel from '../models/eventArtistModel.js';
import MediaModel from '../models/Media.js';


const addEventArtist = async (req, res) => {
    try {
        const {
            artistName,
            artistDis,
        } = req.body;

        // Upload media files to Cloudinary and save in MediaModel
        const mediaArray = [];
        if (req.files && req.files.length > 0) {

            for (const file of req.files) {
                const uploadResult = await cloudinary.uploader.upload(file.path, {
                    resource_type: 'auto',
                    folder: 'your-folder-name',
                });

                const newMedia = new MediaModel({
                    mediaUrl: uploadResult.secure_url,
                    type: uploadResult.resource_type,
                    videoDuration: uploadResult.resource_type === 'video' ? Math.floor(uploadResult.duration) : null,
                });

                const savedMedia = await newMedia.save();

                mediaArray.push({
                    id: savedMedia._id,
                    mediaUrl: savedMedia.mediaUrl,
                    type: savedMedia.type,
                    videoDuration: savedMedia.videoDuration,
                });
            }
        }
        const events = [];
        const eventArtistData = {
            artistName,
            artistDis,
            events: events,
            followers: 0,
            media: mediaArray
        }

        const eventArtist = new eventArtistModel(eventArtistData);
        await eventArtist.save()

        res.status(201).json({
            success: true,
            message: "Artist Data Sucessfully Add",
            eventArtist
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Artist Data Not Added"
        })
    }
}

export { addEventArtist }