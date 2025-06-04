import React, { useState } from 'react';
import './Artists.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const fakeArtists = [
    {
        id: 1,
        name: 'Raven Black',
        avatar: 'https://i.pravatar.cc/150?img=32',
        style: 'Blackwork, Gothic, Dark Linework',
        bio: 'Specializes in highly detailed gothic pieces with a modern surrealist twist.',
        instagram: 'https://instagram.com/ravenblack_tattoos',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/raven-${i}/300/300`
        ),
    },
    {
        id: 2,
        name: 'Jade Inferno',
        avatar: 'https://i.pravatar.cc/150?img=25',
        style: 'Color Realism, Custom Fantasy',
        bio: 'Loves crafting fantasy pieces with vibrant gradients and lifelike textures.',
        instagram: 'https://instagram.com/jadeinferno_ink',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/jade-${i}/300/300`
        ),
    },
    {
        id: 3,
        name: 'Axel Thorn',
        avatar: 'https://i.pravatar.cc/150?img=15',
        style: 'Traditional, Neo-Traditional',
        bio: 'Draws inspiration from Americana and folk motifs with bold outlines and color.',
        instagram: 'https://instagram.com/axelthorn_tattoo',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/axel-${i}/300/300`
        ),
    },
    {
        id: 4,
        name: 'Nova Vein',
        avatar: 'https://i.pravatar.cc/150?img=8',
        style: 'Fine Line, Minimalist',
        bio: 'Focuses on clean minimalist tattoos with precise line execution and balance.',
        instagram: 'https://instagram.com/novavein.art',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/nova-${i}/300/300`
        ),
    },
    {
        id: 5,
        name: 'Lucien Ash',
        avatar: 'https://i.pravatar.cc/150?img=17',
        style: 'Script, Lettering',
        bio: 'Brings words to life with elegant custom typography and signature fonts.',
        instagram: 'https://instagram.com/lucienash_ink',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/lucien-${i}/300/300`
        ),
    },
    {
        id: 6,
        name: 'Ember Steele',
        avatar: 'https://i.pravatar.cc/150?img=45',
        style: 'Watercolor, Abstract',
        bio: 'Creates expressive, fluid compositions inspired by paint and motion.',
        instagram: 'https://instagram.com/embersteele_tattoos',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/ember-${i}/300/300`
        ),
    },
    {
        id: 7,
        name: 'Kairo Grimm',
        avatar: 'https://i.pravatar.cc/150?img=12',
        style: 'Biomech, Surreal',
        bio: 'Fuses organic and mechanical elements into eerie, detailed body art.',
        instagram: 'https://instagram.com/kairogrimm_ink',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/kairo-${i}/300/300`
        ),
    },
    {
        id: 8,
        name: 'Mira Solace',
        avatar: 'https://i.pravatar.cc/150?img=22',
        style: 'Botanical, Fine Line',
        bio: 'Finds beauty in flora with precision-crafted, naturalist-style tattoos.',
        instagram: 'https://instagram.com/mirasolace.studio',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/mira-${i}/300/300`
        ),
    },
    {
        id: 9,
        name: 'Zane Hollow',
        avatar: 'https://i.pravatar.cc/150?img=29',
        style: 'Dotwork, Sacred Geometry',
        bio: 'Masters precise dot shading and geometric balance for intricate designs.',
        instagram: 'https://instagram.com/zanehollow_tattoos',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/zane-${i}/300/300`
        ),
    },
    {
        id: 10,
        name: 'Sage Lune',
        avatar: 'https://i.pravatar.cc/150?img=33',
        style: 'Anime, Pop Culture',
        bio: 'Captures vibrant fan art with stylized characters and comic inspirations.',
        instagram: 'https://instagram.com/sagelune.ink',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/sage-${i}/300/300`
        ),
    },
    {
        id: 11,
        name: 'Elias Vex',
        avatar: 'https://i.pravatar.cc/150?img=38',
        style: 'Chicano, Portraits',
        bio: 'Delivers emotion-packed realism with Chicano influences and sharp contrast.',
        instagram: 'https://instagram.com/eliasvex.art',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/elias-${i}/300/300`
        ),
    },
    {
        id: 12,
        name: 'Lyra Knell',
        avatar: 'https://i.pravatar.cc/150?img=50',
        style: 'Ornamental, Mandala',
        bio: 'Builds symmetry-driven masterpieces inspired by spiritual mandala motifs.',
        instagram: 'https://instagram.com/lyraknell.ink',
        gallery: Array.from({ length: 9 }, (_, i) =>
            `https://picsum.photos/seed/lyra-${i}/300/300`
        ),
    },
];

export default function Artists() {
    const [selectedArtist, setSelectedArtist] = useState(null);

    return (
        <div className="artists-page" id="artists">
            {/* Page title */}
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
                        <div className="artist-details-row">
                            <img
                                src={selectedArtist.avatar}
                                alt={selectedArtist.name}
                                className="modal-avatar"
                                loading="lazy"
                            />

                            <div className="artist-text-block">
                                <div className="artist-name-style">
                                    <h2>{selectedArtist.name}</h2>
                                    <h4>{selectedArtist.style}</h4>
                                    <p className="artist-bio">{selectedArtist.bio}</p>
                                </div>

                                {selectedArtist.instagram && (
                                    <a
                                        href={selectedArtist.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="artist-ig-link"
                                        aria-label={`${selectedArtist.name}'s Instagram`}
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                )}
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
