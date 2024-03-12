import mongoose from 'mongoose';
import { User, Song, Playlist, Comment } from './schema';
import { playlistData } from './recommend-data'


// This is a standalone program which will populate the database with initial data.
async function run() {
    console.log('Connecting to database...');
    await mongoose.connect('xxx'); // put your own mongodb url here

    // Clear db
    await User.deleteMany({});
    await Playlist.deleteMany({});
    await Song.deleteMany({});
    await Comment.deleteMany({});

    await Playlist.create(playlistData);

    await mongoose.disconnect();
    console.log('Done!');
}

run();