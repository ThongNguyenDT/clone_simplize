import styles from './menuLink.module.scss'
import Link from "next/link";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import React from "react";

const MenuLink = ({item}: any) => {
    return (
        <Link href={item.href} className={styles.container}>
            <Button variant="ghost" size="icon">
                {item.icon}
            </Button>

            {item.title}
        </Link>
    );
};

export default MenuLink;