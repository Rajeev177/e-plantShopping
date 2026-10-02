import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();

    // Get cart items from Redux store
    const CartItems = useSelector((state) => state.cart.items);

    // Track products that have already been added
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: 'Air Purifying Plants',
            plants: [
                {
                    name: 'Snake Plant',
                    image: '/images/snake-plant.jpg',
                    description:
                        'The Snake Plant is a low-maintenance plant that helps purify indoor air.',
                    cost: '$15',
                },
                {
                    name: 'Spider Plant',
                    image: '/images/spider-plant.jpg',
                    description:
                        'Spider Plants are easy to care for and excellent for improving indoor air quality.',
                    cost: '$12',
                },
                {
                    name: 'Peace Lily',
                    image: '/images/peace-lily.jpg',
                    description:
                        'Peace Lily is a beautiful flowering plant that helps remove toxins from indoor air.',
                    cost: '$18',
                },
                {
                    name: 'Aloe Vera',
                    image: '/images/aloe-vera.jpg',
                    description:
                        'Aloe Vera is a useful succulent known for its medicinal properties.',
                    cost: '$14',
                },
                {
                    name: 'Boston Fern',
                    image: '/images/boston-fern.jpg',
                    description:
                        'Boston Ferns are attractive plants that help improve indoor humidity.',
                    cost: '$16',
                },
                {
                    name: 'Rubber Plant',
                    image: '/images/rubber-plant.jpg',
                    description:
                        'Rubber Plants are attractive indoor plants that help clean the air.',
                    cost: '$20',
                },
            ],
        },

        {
            category: 'Aromatic Fragrant Plants',
            plants: [
                {
                    name: 'Lavender',
                    image: '/images/lavender.jpg',
                    description:
                        'Lavender is famous for its beautiful purple flowers and relaxing fragrance.',
                    cost: '$18',
                },
                {
                    name: 'Rosemary',
                    image: '/images/rosemary.jpg',
                    description:
                        'Rosemary is an aromatic herb that can be grown indoors or outdoors.',
                    cost: '$15',
                },
                {
                    name: 'Mint',
                    image: '/images/mint.jpg',
                    description:
                        'Mint is a refreshing aromatic herb that grows quickly.',
                    cost: '$10',
                },
                {
                    name: 'Jasmine',
                    image: '/images/jasmine.jpg',
                    description:
                        'Jasmine produces beautiful and highly fragrant flowers.',
                    cost: '$22',
                },
                {
                    name: 'Gardenia',
                    image: '/images/gardenia.jpg',
                    description:
                        'Gardenia is known for its beautiful white flowers and strong fragrance.',
                    cost: '$25',
                },
                {
                    name: 'Basil',
                    image: '/images/basil.jpg',
                    description:
                        'Basil is an aromatic herb commonly used in cooking.',
                    cost: '$12',
                },
            ],
        },

        {
            category: 'Medicinal Plants',
            plants: [
                {
                    name: 'Aloe Vera',
                    image: '/images/aloe-vera.jpg',
                    description:
                        'Aloe Vera is widely known for its medicinal and soothing properties.',
                    cost: '$14',
                },
                {
                    name: 'Tulsi',
                    image: '/images/tulsi.jpg',
                    description:
                        'Tulsi is a traditional medicinal plant with many health benefits.',
                    cost: '$10',
                },
                {
                    name: 'Neem',
                    image: '/images/neem.jpg',
                    description:
                        'Neem is a medicinal plant traditionally used for many purposes.',
                    cost: '$13',
                },
                {
                    name: 'Ginger',
                    image: '/images/ginger.jpg',
                    description:
                        'Ginger is a useful medicinal plant and a popular cooking ingredient.',
                    cost: '$11',
                },
                {
                    name: 'Turmeric',
                    image: '/images/turmeric.jpg',
                    description:
                        'Turmeric is a medicinal plant commonly used as a spice.',
                    cost: '$12',
                },
                {
                    name: 'Peppermint',
                    image: '/images/peppermint.jpg',
                    description:
                        'Peppermint is an aromatic herb commonly used for its refreshing properties.',
                    cost: '$14',
                },
            ],
        },

        {
            category: 'Low Maintenance Plants',
            plants: [
                {
                    name: 'ZZ Plant',
                    image: '/images/zz-plant.jpg',
                    description:
                        'ZZ Plants are extremely low maintenance and tolerate low light.',
                    cost: '$20',
                },
                {
                    name: 'Pothos',
                    image: '/images/pothos.jpg',
                    description:
                        'Pothos is an easy-to-grow indoor plant that requires minimal care.',
                    cost: '$15',
                },
                {
                    name: 'Succulent',
                    image: '/images/succulent.jpg',
                    description:
                        'Succulents store water and require very little maintenance.',
                    cost: '$10',
                },
                {
                    name: 'Cactus',
                    image: '/images/cactus.jpg',
                    description:
                        'Cactus plants require very little water and are easy to maintain.',
                    cost: '$9',
                },
                {
                    name: 'Jade Plant',
                    image: '/images/jade-plant.jpg',
                    description:
                        'Jade Plants are hardy succulents that are easy to grow indoors.',
                    cost: '$16',
                },
                {
                    name: 'Cast Iron Plant',
                    image: '/images/cast-iron-plant.jpg',
                    description:
                        'Cast Iron Plants are highly tolerant of low light and neglect.',
                    cost: '$22',
                },
            ],
        },

        {
            category: 'Flowering Plants',
            plants: [
                {
                    name: 'Rose',
                    image: '/images/rose.jpg',
                    description:
                        'Roses are popular flowering plants known for their beautiful blooms.',
                    cost: '$20',
                },
                {
                    name: 'Orchid',
                    image: '/images/orchid.jpg',
                    description:
                        'Orchids produce elegant flowers and make attractive indoor plants.',
                    cost: '$25',
                },
                {
                    name: 'Hibiscus',
                    image: '/images/hibiscus.jpg',
                    description:
                        'Hibiscus produces large and colorful flowers.',
                    cost: '$18',
                },
                {
                    name: 'Marigold',
                    image: '/images/marigold.jpg',
                    description:
                        'Marigolds are bright flowering plants that are easy to grow.',
                    cost: '$12',
                },
                {
                    name: 'Geranium',
                    image: '/images/geranium.jpg',
                    description:
                        'Geraniums are colorful flowering plants suitable for containers.',
                    cost: '$16',
                },
                {
                    name: 'Petunia',
                    image: '/images/petunia.jpg',
                    description:
                        'Petunias are popular flowering plants with colorful blooms.',
                    cost: '$14',
                },
            ],
        },
    ];

    // Add product to Redux cart
    const handleAddToCart = (product) => {
        dispatch(addItem(product));

        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    // Calculate total quantity of products in cart
    const calculateTotalQuantity = () => {
        return CartItems
            ? CartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
              )
            : 0;
    };

    // Open cart
    const handleCartClick = () => {
        setShowCart(true);
    };

    // Continue shopping
    const handleContinueShopping = () => {
        setShowCart(false);
    };

    return (
        <div>
            {!showCart ? (
                <>
                    <div className="navbar">
                        <button
                            className="home-button"
                            onClick={onHomeClick}
                        >
                            Home
                        </button>

                        <button
                            className="cart-button"
                            onClick={handleCartClick}
                        >
                            🛒 Cart ({calculateTotalQuantity()})
                        </button>
                    </div>

                    <div className="product-grid">
                        {plantsArray.map((category, index) => (
                            <div key={index}>
                                <h1>
                                    <div>{category.category}</div>
                                </h1>

                                <div className="product-list">
                                    {category.plants.map(
                                        (plant, plantIndex) => (
                                            <div
                                                className="product-card"
                                                key={plantIndex}
                                            >
                                                <img
                                                    className="product-image"
                                                    src={plant.image}
                                                    alt={plant.name}
                                                />

                                                <div className="product-title">
                                                    {plant.name}
                                                </div>

                                                <div className="product-description">
                                                    {plant.description}
                                                </div>

                                                <div className="product-cost">
                                                    {plant.cost}
                                                </div>

                                                <button
                                                    className="product-button"
                                                    onClick={() =>
                                                        handleAddToCart(
                                                            plant
                                                        )
                                                    }
                                                    disabled={
                                                        addedToCart[
                                                            plant.name
                                                        ]
                                                    }
                                                >
                                                    {addedToCart[
                                                        plant.name
                                                    ]
                                                        ? 'Added to Cart'
                                                        : 'Add to Cart'}
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <CartItem
                    onContinueShopping={
                        handleContinueShopping
                    }
                />
            )}
        </div>
    );
}

export default ProductList;