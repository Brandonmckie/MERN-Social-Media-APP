 // navbar

 const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(flase);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useselector((state) => state.user);
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

    const theme = use theme();
    const neutrallight = theme.palette.neutral.light 
    const dark = theme.palatte.neutral.dark;
    const background = theme.palette.background.default;
    const primarlylight = theme.palette.primary.light;
    const alt = theme.palatte.background.alt;

    const fullname = `${user.firstName} ${user.lastName}`;


    return <FelexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
            <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
                ""
            }}

            >
                Sociopedia
            </Typography>
        </FlexBetween>
    </FlexBetween>;

};


export default Navbar

// 2:32:21 // 