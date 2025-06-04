import React, { useState } from 'react';
import './Artists.css';

const fakeArtists = [
    {
        id: 1,
        name: 'Raven Black',
        avatar: 'https://i.pravatar.cc/150?img=32',
        style: 'Blackwork, Gothic, Dark Linework',
        bio: 'Specializes in highly detailed gothic pieces with a modern surrealist twist.',
        gallery: Array.from({ length: 9 }, (_, i) => `https://source.unsplash.com/300x300/?tattoo,blackwork,${i}`)
    },
    {
        id: 2,
        name: 'Jade Inferno',
        avatar: 'https://i.pravatar.cc/150?img=25',
        style: 'Color Realism, Custom Fantasy',
        bio: 'Loves crafting fantasy pieces with vibrant gradients and lifelike textures.',
        gallery: Array.from({ length: 9 }, (_, i) => `https://source.unsplash.com/300x300/?tattoo,color,${i}`)
    },
    {
        id: 3,
        name: 'Axel Thorn',
        avatar: 'https://i.pravatar.cc/150?img=15',
        style: 'Traditional, Neo-Traditional',
        bio: 'Draws inspiration from Americana and folk motifs with bold outlines and color.',
        gallery: Array.from({ length: 9 }, (_, i) => `https://source.unsplash.com/300x300/?tattoo,traditional,${i}`)
    },
    {
        id: 4,
        name: 'Nova Vein',
        avatar: 'https://i.pravatar.cc/150?img=8',
        style: 'Fine Line, Minimalist',
        bio: 'Focuses on clean minimalist tattoos with precise line execution and balance.',
        gallery: Array.from({ length: 9 }, (_, i) => `https://source.unsplash.com/300x300/?tattoo,minimalist,${i}`)
    },
];

export default function Artists() {
    const [selectedArtist, setSelectedArtist] = useState(null);

    return (
        <div className="artists-page">
            <h1 className="artists-title">Meet Our Artists</h1>

            <div className="artist-grid">
                {fakeArtists.map(artist => (
                    <div key={artist.id} className="artist-card" onClick={() => setSelectedArtist(artist)}>
                        <img src={artist.avatar} alt={artist.name} className="artist-avatar" />
                        <div className="artist-info">
                            <h3>{artist.name}</h3>
                            <p>{artist.style}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedArtist && (
                <div className="artist-modal" onClick={() => setSelectedArtist(null)}>
                    <div className="artist-modal-content large" onClick={(e) => e.stopPropagation()}>
                        <div className="artist-details">
                            <img src={selectedArtist.avatar} alt={selectedArtist.name} className="modal-avatar" />
                            <div className="artist-text">
                                <h2>{selectedArtist.name}</h2>
                                <h4>{selectedArtist.style}</h4>
                                <p>{selectedArtist.bio}</p>
                            </div>
                        </div>


                        <div className="artist-gallery">
                            {selectedArtist.gallery.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`tattoo-${i}`}
                                    className="gallery-img"
                                    loading="lazy"
                                />
                            ))}
                        </div>

                        <button className="close-btn" onClick={() => setSelectedArtist(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
