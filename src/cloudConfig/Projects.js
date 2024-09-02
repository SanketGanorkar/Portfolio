import cld from "@/cloudConfig/cloudinaryConfig.js";
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

    const tripwise = cld
    .image('tripwise_wsaosf')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const logoexpress = cld
    .image('logoexpress_ecy3f7')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const matdaan = cld
    .image('Matadaan_nfvefs')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const podstream = cld
    .image('podstream_reeoso')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const blogrestapi = cld
    .image('BlogApp_iql01a')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const rapiddine = cld
    .image('rapiddine_nsjmgb')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const nutrify = cld
    .image('Matadaan_nfvefs')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    export const projects = [
        {
            id: 1,
            img: tripwise,
        },
        {
            id: 2,
            img: logoexpress,
        },
        {
            id: 3,
            img: matdaan,
        },
        {
            id: 4,
            img: podstream,
        },
        {
            id: 5,
            img: blogrestapi,
        },
        {
            id: 6,
            img: rapiddine,
        },
        {
            id: 7,
            img: nutrify,
        }
    ];