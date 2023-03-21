import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth";

// File Storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/auth/register", upload.single("picture"), register);

app.use("/auth", authRoutes);

// Mongoose setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));


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