import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const BlogAvatar = () => (
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}
            size={80}
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAtAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EAEAQAAIBAwMBBAcGBAQFBQAAAAECAwAEEQUSITETIkFRBhRhcYGRoTJCUmKxwSNy0fCSorLhFVPS4vEkM4KTwv/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEABQb/xAAmEQACAgEEAwACAgMAAAAAAAAAAQIRAxITITEEQVFCYRRSBSKB/9oADAMBAAIRAxEAPwDMgL+Guht/DVgiIrtYzXoORLpKQiHqtdCCNvAiiBGfEVYsdC5BKIKbYfdbiuTbH20xWIEdKsWAeVDuUEoCjsD7a89X9lOvVwfA141owrt03aEvY4rhoW8BTo2pxzXBtD5CuWU54xMYmHhXPZ/lpw1sRngVS0OPCj3QHiFTRjHK1RJbqfCmzQk9BVTQ89D8qYsouWKxK8RFVlMU4a2DAkUM9q3gKbHIieWFroBSEselGJAFWvezKDFWdp3cNQynZ0OOwW4hXZk0ERijbiYFSooJjTIPgCffByRXJr3NcsaZZlHmalcnOaldYdG/EefCu1jFcIX8waJiB8RXkSZ6aoi2wPsq9LPPhmrYlBouGME/aFJlkaGqKYNHaN4CrRaN4qKYxwjxlQfGr0hIGRhh7s/pSXlYxYxULXzXFdC3HkaahOeVHwFWLbs5wsbE+6heRhaBP6spHSqbi17OCSRImkKKSEXq2PAZp3fLDp1s1zfuLeFeruOp8APM1gNc9MJJxJBpsZihYFTJIMuw9g8Pr8K5TZriG6TqVhqzmOAskuMiOXGWHmMZzR7WSg+fsr5r2zo26NmVh0KnBFEwa7qVue5dy+5myPrR6v2DpNybMYOQVBPh0oeW0bb9lgM9SDj4UnsPS9hhNQiEiHq0QCt8uh+layyfTtWg7Syut4Ud9WUhk94xRa2jHFMR9ntxtC8nkN1+GaqeLvYJyADwf0z8q0EukLJykiA54ycfrQ0uj3IGO0iAz96UUyOZfRMsbM5cRFz9nnpx40vnBXIArWT6TdEYaS3I8xIAfdXH/DY4yqzNp+5eB2kpY/IGqI+RFE0/H1GIbJPmfZV0FhdXClooJCv4thx+lbITpDwLrT0x0EdsxPzJrxb2/mKhdSsTuPcXsyAfmRTH5Uq4QpeLFdszVv6N6hOe+qwjw7QNz8hRI9E5QcS3iD2JExp76trkjgtqEEfe+7Dgn514NK1GSTcdal3AkYEaj9aRLycj/JFEfHgvxYkHo1bY71zJn+SpTt9MuUYrJrV0jDqpRRj/AC1KHfn/AGD2Yf1DYtIvicC1f38UZHo90P8A3EVR7WpqloxOZZ2CjkgPj96LgaCMArM2fzSZqKWeTKliiLYNHB5eTGPDH+9N7bRLcxlmMuAOSF4/WiIrwkBEnk/mDgfsKs9Q9bPfut/kWXc3zJ4oHJv2FVAAh0ocCSRiPymrYxp642RyyH/DTWHSoVIDSIxH5F/Sr2tbXgFSxHjgKP2rKZ2pClJEB/h2yj+Z2NVX176nbSXVzKI4413HAx8vbTc21sMcFQTgHd1PlXzf0+1P169Gn2zYtbZu/wDmk6EcddvT35oZOuQ4LU6Mt6Q6zd65emWUssSE9lFnIjH9fM0naGtvo3obc3zgS/8Ap4Tnc7g5BHl8f7Fa2x9B9AtWVrqSS5l8RM2EPtwpHyyaFSbGNxjwfGDDkVTLbbSBjJ68V98TTNDjyF0S0znhwowfd1rP+n9rpcXo9JPDp8ENyHRIZFGSO9yPkDxW6mgbT9Hx8w4Io6yuJrGZJraQxSLyrD++nsrYaN6IDVdK9cuZTbSSnMWyMEFfMjI6++luoehmqW+TaS29yPL7B+vH1olNs2kjVaVdy6vYR3URVXOVdOO6w6j3ePxrqWzuGDM0i5H4icCsl6K6xLoV1JpuoRy2/rMikFx0f7I48QeOR5Vs5Wkb7TE48/CmqxEqYqbS5JDlpEGfDn+zVT6RFyHuRtP5T1NMnUN9o0NJADycGmLJJexTghY+mabHlZ78yeSopGPjg0K0ekRBttpdzk+LMAB9KZy2inJwKFlt1GAyMcckBsU+OS+2yeUa6QqOoyxqY4ba2SPOVygYqeg586GutQurlNkzR4zk/wAMA0zeFc9yMgjz72TXs3ayLhrHegBAUBhg+fdp6lBehLU32zOdm/H8R/8AEalNzazAnNo+fbGalO3UJ2mfUdkTIQrW2D5Mq/tXC2ZZu5cWiL7XDfvXI06VkXs/V+0yMrJyCPhzRMGn7GIk9XOeR2UhXHs5FfPuSPeSZbBo5Jz25fxzHCFHzY80zt9NigAfsmkYfilAH0oUP2a53FkUcMG6fQ/pV0N6kTgPcl8/cldAV/yjiuUor0C7GGborhIoIVxnk5NUyuLaMz3c6xovWRyqqPiTV0F9ExLboFwuTiVenn7qSaxo+m63O1xe3F5M4YLFGJgqxdB3QB06kk5Jz5YAKUlXYKXPRXqnpXp0VnMLW7WWfs27DZkjcRxz08vHzrPeifo/LNIL24G2MjutuIfz48s+ft468M4fQux3IIbqVnckKXAIUDqSAOfLwpz6JaRfaXfXUNy6vbbAQ4ztZ84GM9OBz8KQlOcuRzlCEHpYaIZO6EjQL4+FctYTud2Y+evjmnioGXdJgDoAa8O4nO3Cnr3eT/fNP/jr2yfefwVR6cp2q5AXPAVAuaouvR2y1QQPqKGZYGJijZyU95HQ5Hn4U+2gDO3B8zyaolLYwg91FojExSkxfc2QC/Yj48x4UvewUPv9X3Y6Df8AsBR8y3ZJ2Gb/AOJIpZdLKCRNK6jxDMfrQNpBpM4nsreUYls4hswVZlPB8xwMUvu7GJSGklRAfFIzXkzW6Da0jkL91c80vfULaJx2MUm7ORv5+ldrQehl/qduz4VpZME57mB86klskSlkjjdWOMkghfpQD6heMd0aKm78KH96GmW7uSXa2lkxxuUHNdrO0BjhYz3okBH2SIBj4HNDSTLODskJI8OzVf2qmKyutw7eORV824GKtaGOHJjt1kZuW2sCwPsrdZjgimW0P2zM5GOgPPu4rgWUUp7yOFH2u8x93OakzQ7xmOQvuHdDZ+dd3E2yRJleKMHxZCCPdjrR7kvoGiPwDa1tVOFtIn9pyx+JryrGmXexS7nAJzhFGPhUrdxnaP0bWO/hVshWPlgCiY9QXfnswuTxkc1hLX0mjbO4OPYVBro6vZMp2Quhf7ezu5+Rqd6l6HqKZ9Ghv4xjhR57V5on1uLazLGWPXcyE8fGvmtlqFhE6ukl6rA9DISP1pzD6S9mwW3t1MZ6nO3PtxQPI0Fs30a4axaTO8CzRCTG3aSM11dFT/FXLCM84GCemfoKzo1e2kjCCDcBnCbRgfH+laDTjHcWCOoVCxGcDO3r/QfOshk3G0wMmPbVhOkQvI7SOAqrGE946n5nmnCRIowqgeNK9HnzEECccbueelNwRvx44q3x3Fx4JMtqXJysZUk48c12qcAmujVNw0wX+EuTTnUVYCVlrY9lDSyIucgce2lGpvqsg226sAfFTikU9tqakmS52tnLAzcj61Hk8qnSiU48FrmRqpJo2BCgH3c0BLbo/JEGCf8Albj9ayk0OrOSBJK3PUOcUM9hr05KIZyOMkyYH1NI/k6vQ9ePX5GluvVrUKJZLVTngFUX96WzXoQN2cUbBmPIC49uev60huPRm8QM9y8aN+J3LZ+OKXS6BcAMVeJ1HXax4+YoXkGRxL7ZoXvbuRsxbEUeCjcSP0oG4nmZtq3jB+pDxbf/ADWdnsTbttWd1b723gD61atxPAojeaOVR0aVS/69K3VZu3QdeTukRebURt8m7uf1zSk3sNw4YyGUg8IqHGK9vNWlfiXspV/MBjHuqlNaMSnLPnGBscqB8OlMjYEkhjuAw0kCqPwqm4/Ln60PPeSdptjt7lm8N1uRSh9VnlZg+Zc9Af8Aaq1v7gYCxlR57qYoMC0M5rqcvmR3jYjlWcKR8DXlBJmUF3dck/ei3fXFSt/6dS+EurI2/eHaAEZ2OASvxXg/Sq4mAPNHW8VvFGVXd7SWI/Su1gt2JO4HP5/96TvL2U7D9FcMgyM02tLm3EZSSIMx+9k5FAJYxMNwdgPy0TFZRDpLJn24qfJOA6GOaH+kzWj5SVGcYJDdCMDP6Vqr1haxm3XOyLKsegLE5PvPP1rGaXAiXKBJMtnA3YxWi1VmxHE5ZB9ts9GY5zS4yWiTQrNB7kUx1o9/FFw3yHnWitZllRZN3LeBFYC325zvzzindpdiNVBdsDp3q3x/LeJ6X0Iz+NfKNap3AGvGZV5JxSRdSRUGCf8AFQl7qZK90+H4qvl/kIJWiVeNJuhpf6jHCcYyPYaS32sxuoCqceIYZ+lI7zUHLHLc0snvSc5NefPycmR/ovx+Ko9jU66sDkHJUdASeK6f0pkC4jhjx57v9qy89yCD0pfPcEcg/Wujr+jXjh7Rpbz0juZOQwTHl40g1LVpZ2Bdu/0GD0FLjNNJnnCjqx6ChZ7nblUw35vOnRx88gNpdFkmoFXAByF8mx/4qm5vu2YnaAB05oV5mIIzz4VU0ncGACPA8c1THGhUps7e7KKSrDJ6YoMz5POa8llU91c4HjVDOKpjCieUmEesPESUYqCMHHFWev7AFR2C46CgHYcHJ+dVtJnrR6LF6hidTI++1SlRcA9KlbtIzckbI2sEkJL3MsakHcrleR7MDNURaVpZIzK8XIx2p2gj2FgKYWVxqQ5M8bQjqVLL7/tNVc13G4kjF7cAeSTg/wBeKl6KLb9niaXahSIGlZM894Bf9RzR1tpiFFaG6u0Cn7LYCkfWkZvoodpllvTtBVjvJy3h1H9+3pR6TPdWg9U7Ttlcb4mG4t15wRyOg+Ph1oZRvsJTkjT6JH2V2jGY5XcRu6HII+J59nxppqLLcLERIVCjCAe/yNZXTVvBdwTJJNJDtfdFn7DBWIDeQOBjz6eVeR6vdqyRySJOqZzlscAcjJHB/rSJYlVIPU3JNj0b49qdpIWyedwwfd40dbrNKgaKXjx38bT8uPjWde7vpIlaOWFucHsyFPTyIz51xp+p3thOO1hhkTr/AB0Rx18R1FJWKN8oY5Srhn0XSLeKWEreRHfH+BnfI+QFLtQtlZ3PqmolgeGhH8NfZ0z86UWPprFBId2nWRXGS0Q2j/TVl/6QaTOUnaOz7Ukd6OEsen4u7VLWJxpInUcqlZVdWsZAYPcQkjlJWXPwpbPbxBcvcMMnjpn+n60Sus2tw+9g0ZA6tGRj4k0vuLvdMZIY0wPvh4QT81NTxgrKdUkgG7hgDIz3UqFD/wAwBfjyOPfXhgiePMNwJWPQpyBRXrkjNn1ZnI8d6E/6RQUmotJIQLRiB93tI/8AqqiMb9C5Tf0qaxlkB7WRwcY8cZ+VBvaKzFFIc+G2Q/8ATijo7qCSRg1ugz4MI25/xGqZb6GMlJEePGcZtiB9BTUn8FOX7F81uqyBXfDZ5Dvt+QK81wYI5mZQ2CABw3X3DFWpDaSFpYpoJXznG1V+H2aqWa5ikPZ6Qdn4kdSP2pyQlyBZNPG/blvgQcezzrh9PGDtWYE9AcYHxzRco1JzuCwop8DG2f8AK9VTpPtI7cxN4Fc//pjRpgNgUtrGmN8i56fa4qprWMOv8Zen4+v0/SuJ4NVyOzlkf29wfpXVu+rQjEhWUeY5P0FMF2dDTCRwZPitSrFvZ8d+KXd44if+lShuQX+p5/wa7l4k1FGH5JS1WJ6PoqkPdSlupCxFuPeGqVKS8jHxgi+LQnP25JWhznDBFz8S+fpVwsOzOTMUH4TcoB888/SpUobbQVUXWVxLZEtHctIehCPuz4fv7aaw6hMRHGYrsgEltyGTPl4cc1KlBJINM9OoXm+POnsV37mEwCA9R5eWa6XTtUuggi04vhj3g3d8upwOMAfvUqUquQ3JpFbaZ6QQ5L2LKmRubtUIHP8ANn5UK9pdW83by2skZPWQoVDHxxlgDUqUTiqMU3dBiXckMm828nH4FQuD/Luqm4vZ7w963vNmONtsmR8jUqUMUhsmLmSLDCS0uVboG7LFK7mCNcmMzA+1Cv6V5Up8eCaTsGFnLIxMZcjPQ5/pU/4bfZ3BG/8AsIx9KlSjc2hajZ6+m6iTksWY9DJIWxXMdnrEeALmWJM5wrED5CpUolNsFwoPgNyDzdSM/wCYuBVzSzBsNKM54zjn9DUqVnbNS4PZSko29okjfhJYfUVUIAqjMbBc9Wc4z79x/avKlF06BfPJUxgB4EfwP/aalSpR0BZ//9k='/>

    // <Avatar size="large" icon={<UserOutlined />} />
);
export default BlogAvatar;